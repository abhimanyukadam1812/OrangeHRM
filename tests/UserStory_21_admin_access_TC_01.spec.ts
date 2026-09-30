import { test, expect } from '@playwright/test';
import { adminLocators } from '../locators/admin/admin.locator';
import { testConfig } from './testConfig';

test('Admin page access', async ({ page }) => {
  await page.goto((testConfig.baseUrl || '/') + testConfig.loginPath);
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  await page.getByPlaceholder(/password/i).fill(testConfig.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  // Expected: The Admin page loads for the logged-in user
  await expect(page.locator(adminLocators.page)).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
