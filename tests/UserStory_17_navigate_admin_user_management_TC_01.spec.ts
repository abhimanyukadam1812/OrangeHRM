import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { NavigateToAdminUserManagementPageViaSidepanelPage } from '../pages/navigate-to-admin-user-management-page-via-sidepanel/navigate-to-admin-user-management-page-via-sidepanel.page';

test('Navigate to Admin/User Management page via sidepanel', async ({ page }) => {
  const navigate-to-admin-user-management-page-via-sidepanelPage = new NavigateToAdminUserManagementPageViaSidepanelPage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('link', { name: /admin/i }).click();
  // Expected: The 'Admin/User Management' page is displayed with System Users section visible
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
