# OrangeHRM — Playwright E2E Framework

Runnable end-to-end test framework for the [OrangeHRM open-source demo](https://opensource-demo.orangehrmlive.com). Uses the **Page Object Model** with a central **locators** file so tests stay stable when the UI changes.

This is the target repo for the automation agent: generated Playwright scripts and the live-scraped locators are pushed here on a feature branch, then merged.

## Quick start

```bash
# 1. Install dependencies (Node 18+)
npm install

# 2. Install the browser (only needed if your Playwright version differs from the cached one)
npx playwright install chromium

# 3. Run the suite
npm test                 # headless (default)
npm run test:headed      # watch it run
npm run report           # open the HTML report
```

No environment setup is required to run against the public demo — the suite falls back to the demo credentials. To target another instance or user:

```bash
cp .env.example .env     # then edit the values
npm test
```

## Configuration

| Env var                | Default                                    | Purpose                     |
| ---------------------- | ------------------------------------------ | --------------------------- |
| `ORANGEHRM_BASE_URL`   | `https://opensource-demo.orangehrmlive.com`| Target instance             |
| `ORANGEHRM_USERNAME`   | `Admin`                                    | Login user                  |
| `ORANGEHRM_PASSWORD`   | `admin123`                                 | Login password              |

## Structure

```
locators/login.locator.ts   # Centralised selectors (the artifact the agent regenerates)
pages/login.page.ts         # Page object — high-level actions + locators
tests/auth/login.spec.ts    # Test specs (Page Object style)
tests/testConfig.ts         # Credentials / target, env-driven
scripts/fetch_locators.js   # Scrapes the live site to (re)generate locators
playwright.config.ts        # Browser projects, timeouts, reporters
```

## Fetching locators from the site

The login form is a Vue single-page app, so the raw HTML contains no `<input>` elements — the fields exist only after the SPA mounts. To capture (or refresh) the selectors:

```bash
npm install                              # once (uses the repo's Node Playwright)
npm run fetch:locators                   # rewrites locators/login.locator.ts
npm run fetch:locators:check             # just print what was found
```

## CI

GitHub Actions (`.github/workflows/e2e.yml`) runs the headless Chromium suite on every push to `main` and on pull requests, and uploads the HTML report as an artifact.

## Writing a new test

1. Add the element to `locators/login.locator.ts` (or a new `<page>.locator.ts`).
2. Wrap it in a page object under `pages/` with an action/assertion.
3. Reference the page object in a spec under `tests/` — never a raw selector.
4. Run `npm test` to confirm.
