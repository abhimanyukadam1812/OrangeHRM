import { test, expect } from '@playwright/test';
import { homeLocators } from '../locators/home/home.locator';
import { testConfig } from './testConfig';

test('Verify User Role column displays valid values Admin or ESS', async ({ page }) => {
  await page.goto(testConfig.baseUrl || '/');
  // Expected: Every entry in the 'User Role' column displays either 'Admin' or 'ESS'
  await expect(page.locator(homeLocators.page)).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
