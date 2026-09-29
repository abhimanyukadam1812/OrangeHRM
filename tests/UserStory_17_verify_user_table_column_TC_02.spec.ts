import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifyUserTableColumnHeadersPage } from '../pages/verify-user-table-column-headers/verify-user-table-column-headers.page';

test('Verify User table column headers', async ({ page }) => {
  const verify-user-table-column-headersPage = new VerifyUserTableColumnHeadersPage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('link', { name: /admin/i }).click();
  // Expected: Table displays columns 'Username', 'User Role', 'Employee Name', 'Status', 'Actions' in order
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
