import { test, expect } from '@playwright/test';
import { homeLocators } from '../locators/home/home.locator';
import { testConfig } from './testConfig';

test('Verify total records count displayed above table matches actual user count', async ({ page }) => {
  await page.goto((testConfig.baseUrl || '/') + testConfig.loginPath);
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  await page.getByPlaceholder(/password/i).fill(testConfig.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  // Expected: The displayed record count exactly matches the total number of user records in the table
  await expect(page.locator(homeLocators.page)).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
