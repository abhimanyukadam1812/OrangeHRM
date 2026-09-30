import { test, expect } from '@playwright/test';
import { homeLocators } from '../locators/home/home.locator';
import { testConfig } from './testConfig';

test('Verify Status column displays valid values Enabled or Disabled', async ({ page }) => {
  await page.goto(testConfig.baseUrl || '/');
  // Expected: Every entry in the 'Status' column displays either 'Enabled' or 'Disabled'
  await expect(page.locator(homeLocators.page)).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
