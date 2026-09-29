import { defineConfig, devices } from '@playwright/test';

export const DEFAULT_ADMIN_USERNAME = process.env.ORANGEHRM_USERNAME || 'Admin';
export const DEFAULT_ADMIN_PASSWORD = process.env.ORANGEHRM_PASSWORD || 'admin123';

/**
 * OrangeHRM E2E framework config.
 *
 * - 'chromium' is the default (headless) project used by CI / `npm test`.
 * - 'chromium-headed' is available for manual runs:
 *     npx playwright test --project=chromium-headed
 */
export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  expect: {
    timeout: 15_000,
  },
  fullyParallel: false,
  retries: 1,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    // Domain root so test paths read as full site paths.
    baseURL: process.env.ORANGEHRM_BASE_URL || 'https://opensource-demo.orangehrmlive.com',
    // Never cache the SPA bundle — the demo rotates its ?v= query params.
    extraHTTPHeaders: {
      'Cache-Control': 'no-cache',
    },
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'chromium-headed',
      use: { ...devices['Desktop Chrome'], headless: false },
    },
  ],
});
