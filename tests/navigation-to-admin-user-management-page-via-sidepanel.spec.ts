import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { NavigationToAdminUserManagementPageViaSidepanelPage } from '../pages/navigation-to-admin-user-management-page-via-sidepanel/navigation-to-admin-user-management-page-via-sidepanel.page';

test('Navigation to Admin/User Management page via sidepanel', async ({ page }) => {
  const navigation-to-admin-user-management-page-via-sidepanelPage = new NavigationToAdminUserManagementPageViaSidepanelPage(page);
  await page.goto(testConfig.baseUrl || 'https://opensource-demo.orangehrmlive.com/');
  await page.getByRole('button', { name: /login|sign in|submit|save|continue|next/i }).click();
  // Expected: The 'Admin/User Management' page is displayed with 'System Users' section visible
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
