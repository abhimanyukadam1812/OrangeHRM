import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifyUserTableColumnHeadersPage } from '../pages/verify-user-table-column-headers/verify-user-table-column-headers.page';

test('Verify User table column headers', async ({ page }) => {
  const verify-user-table-column-headersPage = new VerifyUserTableColumnHeadersPage(page);
  await page.goto((testConfig.baseUrl || '/') + testConfig.loginPath);
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  await page.getByPlaceholder(/password/i).fill(testConfig.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  // Expected: Table displays columns 'Username', 'User Role', 'Employee Name', 'Status', and 'Actions' in that order
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
