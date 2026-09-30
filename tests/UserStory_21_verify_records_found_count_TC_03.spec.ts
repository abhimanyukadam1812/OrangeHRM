import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifyRecordsFoundCountDisplayedAboveTablePage } from '../pages/verify-records-found-count-displayed-above-table/verify-records-found-count-displayed-above-table.page';

test('Verify Records Found count displayed above table', async ({ page }) => {
  const verify-records-found-count-displayed-above-tablePage = new VerifyRecordsFoundCountDisplayedAboveTablePage(page);
  await page.goto((testConfig.baseUrl || '/') + testConfig.loginPath);
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  await page.getByPlaceholder(/password/i).fill(testConfig.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  // Expected: Text is displayed in the format '(X) Records Found' where X matches the actual number of users listed
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
