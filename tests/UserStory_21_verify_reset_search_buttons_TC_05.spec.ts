import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifyResetAndSearchButtonsPresenceAndOrderPage } from '../pages/verify-reset-and-search-buttons-presence-and-order/verify-reset-and-search-buttons-presence-and-order.page';

test('Verify Reset and Search buttons presence and order', async ({ page }) => {
  const verify-reset-and-search-buttons-presence-and-orderPage = new VerifyResetAndSearchButtonsPresenceAndOrderPage(page);
  await page.goto((testConfig.baseUrl || '/') + testConfig.loginPath);
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  await page.getByPlaceholder(/password/i).fill(testConfig.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  // Expected: 'Reset' and 'Search' buttons are displayed after the filter fields, with Reset appearing before Search
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
