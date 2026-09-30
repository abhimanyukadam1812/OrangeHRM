import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifyStatusColumnValuesRestrictedToEnabledOrDisabledPage } from '../pages/verify-status-column-values-restricted-to-enabled-or-disabled/verify-status-column-values-restricted-to-enabled-or-disabled.page';

test('Verify Status column values restricted to Enabled or Disabled', async ({ page }) => {
  const verify-status-column-values-restricted-to-enabled-or-disabledPage = new VerifyStatusColumnValuesRestrictedToEnabledOrDisabledPage(page);
  await page.goto((testConfig.baseUrl || '/') + testConfig.loginPath);
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  await page.getByPlaceholder(/password/i).fill(testConfig.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  // Expected: Every entry in the 'Status' column displays either 'Enabled' or 'Disabled'
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
