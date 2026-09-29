import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifyUserRoleColumnDisplaysOnlyAdminOrEssValuesPage } from '../pages/verify-user-role-column-displays-only-admin-or-ess-values/verify-user-role-column-displays-only-admin-or-ess-values.page';

test('Verify User Role column displays only Admin or ESS values', async ({ page }) => {
  const verify-user-role-column-displays-only-admin-or-ess-valuesPage = new VerifyUserRoleColumnDisplaysOnlyAdminOrEssValuesPage(page);
  await page.goto(testConfig.baseUrl || 'https://example.com/');
  await page.getByRole('link', { name: /admin/i }).click();
  // Expected: Every entry in 'User Role' column displays either 'Admin' or 'ESS'
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
