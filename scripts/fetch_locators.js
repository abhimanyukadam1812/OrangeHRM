#!/usr/bin/env node
/**
 * Fetch element locators for the OrangeHRM login page from the live site.
 *
 * The login form is a Vue SPA, so the raw HTML has no <input> elements — the
 * fields only exist after the browser runs the JS. This script launches a
 * headless Chromium (Playwright), waits for the form to mount, reads the live
 * DOM + ARIA tree, and rewrites `locators/login.locator.ts` with the selectors
 * it finds.
 *
 * Usage:
 *   npm run fetch:locators            # rewrites locators/login.locator.ts
 *   npm run fetch:locators:check      # just print what was found
 *
 * Runs on the repo's own Node Playwright install (see package.json), so no
 * separate Python/Playwright install is needed.
 */
const { chromium } = require('@playwright/test');
const { writeFileSync, existsSync, mkdirSync } = require('node:fs');
const path = require('node:path');

const REPO_ROOT = path.join(__dirname, '..');
const BASE_URL = process.env.ORANGEHRM_BASE_URL || 'https://opensource-demo.orangehrmlive.com';
const LOGIN_PATH = '/web/index.php/auth/login';

// Candidate CSS selectors keyed by the semantic role we care about. The live
// DOM is matched against these (first one that exists wins) and emitted as the
// locator. Candidates are ordered most-specific/reliable first. Note the submit
// button's class list includes both the oxd-* design-system classes and the
// OrangeHRM-specific `orangehrm-login-button`, so we prefer the stable class and
// fall back to the native submit button.
const KNOWN_SELECTORS = {
  usernameInput: ['input[name="username"]'],
  passwordInput: ['input[name="password"]'],
  loginButton: ['.orangehrm-login-button', 'button[type="submit"]'],
  loginForm: ['.orangehrm-login-form', 'form'],
  error: ['.orangehrm-login-error'],
  title: ['.orangehrm-login-title'],
  logo: ['.orangehrm-login-logo'],
};

const OUT_FILE = path.join(REPO_ROOT, 'locators', 'login.locator.ts');
const ARIA_SNAPSHOT = path.join(REPO_ROOT, 'locators', 'login.aria.txt');

// The demo is a public SPA whose mount can be slow or flaky. Retry the load a
// few times until the username field actually renders; return the number of
// attempts that succeeded (0 = the form never mounted).
async function waitForFormMounted(page, attempts = 3, settleMs = 1500) {
  for (let i = 1; i <= attempts; i++) {
    try {
      await page.goto(BASE_URL + LOGIN_PATH, { waitUntil: 'domcontentloaded', timeout: 45000 });
    } catch (err) {
      console.log(`  attempt ${i}/${attempts}: goto failed (${String(err).slice(0, 80)})`);
    }
    try {
      await page.waitForSelector('input[name="username"]', { state: 'visible', timeout: 15000 });
      await page.waitForTimeout(settleMs); // let any late hydration finish
      return i;
    } catch {
      console.log(`  attempt ${i}/${attempts}: form not mounted yet, retrying...`);
    }
  }
  return 0;
}

async function fetchLocators() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const mounted = await waitForFormMounted(page);
  if (mounted === 0) {
    await browser.close();
    console.error('\nCould not load the login form (site unreachable or SPA failed to mount).');
    console.error('The existing locators/login.locator.ts was left untouched.');
    return null;
  }

  // Check every candidate selector in a SINGLE evaluate so the results cannot
  // race the SPA mount. For each role, the first candidate that exists wins.
  const result = await page.evaluate((known) => {
    const found = {};
    for (const [role, candidates] of Object.entries(known)) {
      found[role] = null;
      for (const sel of candidates) {
        let n = 0;
        try {
          n = document.querySelectorAll(sel).length;
        } catch {
          n = 0; // pseudo-selectors (e.g. :has-text) are not CSS — ignore
        }
        if (n > 0) {
          found[role] = sel;
          break;
        }
      }
    }
    return found;
  }, KNOWN_SELECTORS);

  for (const [key, sel] of Object.entries(result)) {
    console.log(`  ${key}: ${sel ?? '(not found)'}`);
  }

  // Capture the raw interactive element inventory (for manual curation).
  const rows = await page.evaluate(() =>
    Array.from(document.querySelectorAll('input,button,a,select,label')).slice(0, 25).map((el) => ({
      tag: el.tagName.toLowerCase(),
      name: el.getAttribute('name'),
      id: el.getAttribute('id'),
      type: el.getAttribute('type'),
      placeholder: el.getAttribute('placeholder'),
      aria: el.getAttribute('aria-label'),
      class: (el.className?.baseVal ?? el.className ?? '').toString().split(' ').slice(0, 3).join(' '),
    })),
  );
  console.log('\nInteractive elements found:');
  for (const r of rows) console.log('  <' + r.tag + '> ' + JSON.stringify(r));

  // Save the ARIA snapshot for role/label-based locators.
  try {
    const aria = await page.ariaSnapshot();
    if (!existsSync(path.dirname(ARIA_SNAPSHOT))) mkdirSync(path.dirname(ARIA_SNAPSHOT), { recursive: true });
    writeFileSync(ARIA_SNAPSHOT, aria, 'utf-8');
    console.log('\nWrote ARIA snapshot -> locators/login.aria.txt');
  } catch (err) {
    console.log(`(aria_snapshot unavailable: ${String(err).slice(0, 80)})`);
  }

  await browser.close();
  return result;
}

function writeLocatorFile(result) {
  const lines = [
    '/**',
    ' * Locators for the OrangeHRM login screen.',
    ' *',
    ' * AUTO-GENERATED by scripts/fetch_locators.js from the live site.',
    ' * Regenerate with:  npm run fetch:locators',
    ' */',
    'export const loginLocators = {',
  ];
  for (const [key, sel] of Object.entries(result)) {
    if (sel) lines.push(`  ${key}: ${JSON.stringify(sel)},`);
    else lines.push(`  ${key}: '', // TODO: locator not found on the live site — set manually`);
  }
  lines.push('} as const;');
  lines.push('');
  // Accessible-name based locators: stable across UI restyles and useful for
  // role/label-based selectors (see the ARIA snapshot written alongside).
  lines.push('/** Accessible-name based locators, useful when names are stable across builds. */');
  lines.push('export const loginAriaLocators = {');
  lines.push("  usernameLabel: 'Username',");
  lines.push("  passwordLabel: 'Password',");
  lines.push("  loginButtonLabel: 'Login',");
  lines.push('} as const;');
  lines.push('');
  writeFileSync(OUT_FILE, lines.join('\n'), 'utf-8');
  console.log('\nWrote locators/login.locator.ts');
}

// The locators that make the suite actually run. If any of these come back
// empty we must NOT overwrite a working file with broken selectors.
const CORE_LOCATORS = ['usernameInput', 'passwordInput', 'loginButton'];

(async () => {
  const checkOnly = process.argv.includes('--check');
  console.log(`Fetching locators from ${BASE_URL}${LOGIN_PATH}\n`);
  const result = await fetchLocators();

  if (result === null) {
    process.exit(1); // site unreachable / form never mounted — file left untouched
  }
  const missing = CORE_LOCATORS.filter((k) => !result[k]);
  if (missing.length) {
    console.error(`\nRefusing to overwrite locators: core locator(s) not found: ${missing.join(', ')}`);
    console.error('The existing locators/login.locator.ts was left untouched.');
    process.exit(1);
  }
  if (!checkOnly) writeLocatorFile(result);
})().catch((err) => {
  console.error('fetch_locators failed:', err);
  process.exit(1);
});
