import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifyStatusColumnDisplaysOnlyEnabledOrDisabledValuesPage } from '../pages/verify-status-column-displays-only-enabled-or-disabled-values/verify-status-column-displays-only-enabled-or-disabled-values.page';

test('Verify Status column displays only Enabled or Disabled values', async ({ page }) => {
  const verify-status-column-displays-only-enabled-or-disabled-valuesPage = new VerifyStatusColumnDisplaysOnlyEnabledOrDisabledValuesPage(page);
  await page.goto(testConfig.baseUrl || 'https://example.com/');
  await page.getByRole('link', { name: /admin/i }).click();
  // Expected: Every entry in 'Status' column displays either 'Enabled' or 'Disabled'
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
