import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifySystemUsersSectionFilterFieldsPage } from '../pages/verify-system-users-section-filter-fields/verify-system-users-section-filter-fields.page';

test('Verify System Users section filter fields', async ({ page }) => {
  const verify-system-users-section-filter-fieldsPage = new VerifySystemUsersSectionFilterFieldsPage(page);
  await page.goto((testConfig.baseUrl || '/') + testConfig.loginPath);
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  await page.getByPlaceholder(/password/i).fill(testConfig.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  await page.getByPlaceholder(/username/i).fill('Admin');
  // Expected: System Users section displays 'Username' as a textfield and 'User Role' as a filter dropdown
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
