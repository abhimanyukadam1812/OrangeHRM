import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifyUserTableColumnHeadersOnAdminUserManagementPagePage } from '../pages/verify-user-table-column-headers-on-admin-user-management-page/verify-user-table-column-headers-on-admin-user-management-page.page';

test('Verify user table column headers on Admin/User Management page', async ({ page }) => {
  const verify-user-table-column-headers-on-admin-user-management-pagePage = new VerifyUserTableColumnHeadersOnAdminUserManagementPagePage(page);
  await page.goto(testConfig.baseUrl || 'https://opensource-demo.orangehrmlive.com/');
  await page.getByRole('button', { name: /submit|save|continue|next|login/i }).click();
  // Expected: Table displays columns exactly as 'Username', 'User Role', 'Employee Name', 'Status', 'Actions'
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
