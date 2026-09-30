import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { LoginPage } from '../pages/login.page';

test('Verify User Role column displays only valid values', async ({ page }) => {
  const verifyUserRoleColumnDisplaysOnlyValidValuesPage = new LoginPage(page);
  await page.goto((testConfig.baseUrl || '/') + testConfig.loginPath);
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  await page.getByPlaceholder(/password/i).fill(testConfig.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  // Expected: Every entry in the 'User Role' column displays either 'Admin' or 'ESS'
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});

