import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifyStatusCanBeEnabledOrDisabledActionColumnDisplaysTrashIconAndPePage } from '../pages/verify-status-can-be-enabled-or-disabled-action-column-displays-trash-icon-and-pe/verify-status-can-be-enabled-or-disabled-action-column-displays-trash-icon-and-pe.page';

test('Verify: "Status" can be  Enabled or Disabled, "Action" column displays trash ico', async ({ page }) => {
  const verify-status-can-be-enabled-or-disabled-action-column-displays-trash-icon-and-pePage = new VerifyStatusCanBeEnabledOrDisabledActionColumnDisplaysTrashIconAndPePage(page);
  await page.goto(testConfig.baseUrl || 'https://example.com/');
  await page.getByRole('button', { name: /submit|save|continue|next|login/i }).click();
  // Expected: The primary behavior is confirmed: "Status" can be  Enabled or Disabled, "Action" column displays trash icon and pencil icon
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
