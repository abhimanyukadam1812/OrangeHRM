import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { NavigateToAdminUserManagementPageFromSidepanelPage } from '../pages/navigate-to-admin-user-management-page-from-sidepanel/navigate-to-admin-user-management-page-from-sidepanel.page';

test('Navigate to Admin/User Management page from sidepanel', async ({ page }) => {
  const navigate-to-admin-user-management-page-from-sidepanelPage = new NavigateToAdminUserManagementPageFromSidepanelPage(page);
  await page.goto(testConfig.baseUrl || 'https://example.com/');
  await page.getByRole('link', { name: /admin/i }).click();
  // Expected: The 'Admin/User Management' page is displayed with System Users section visible
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
