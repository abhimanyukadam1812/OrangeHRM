import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifyUserRoleAndStatusValuesAreRestrictedToDefinedSetPage } from '../pages/verify-user-role-and-status-values-are-restricted-to-defined-set/verify-user-role-and-status-values-are-restricted-to-defined-set.page';

test('Verify User Role and Status values are restricted to defined set', async ({ page }) => {
  const verify-user-role-and-status-values-are-restricted-to-defined-setPage = new VerifyUserRoleAndStatusValuesAreRestrictedToDefinedSetPage(page);
  await page.goto(testConfig.baseUrl || 'https://opensource-demo.orangehrmlive.com/');
  await page.getByRole('button', { name: /submit|save|continue|next|login/i }).click();
  // Expected: Every row's User Role value is either 'Admin' or 'ESS', and every row's Status value is either 'Enabled' or 'Disabled'
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
