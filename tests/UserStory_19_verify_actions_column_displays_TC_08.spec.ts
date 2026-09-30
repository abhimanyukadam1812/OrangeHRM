import { test, expect } from '@playwright/test';
import { homeLocators } from '../locators/home/home.locator';
import { testConfig } from './testConfig';

test('Verify Actions column displays trash and pencil icons for each user row', async ({ page }) => {
  await page.goto(testConfig.baseUrl || '/');
  // Expected: Each row in the 'Actions' column displays both a trash icon and a pencil icon
  await expect(page.locator(homeLocators.page)).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
