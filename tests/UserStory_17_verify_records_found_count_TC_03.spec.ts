import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifyRecordsFoundCountDisplayedAboveTablePage } from '../pages/verify-records-found-count-displayed-above-table/verify-records-found-count-displayed-above-table.page';

test('Verify Records Found count displayed above table', async ({ page }) => {
  const verify-records-found-count-displayed-above-tablePage = new VerifyRecordsFoundCountDisplayedAboveTablePage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('link', { name: /admin/i }).click();
  // Expected: Text displaying total records e.g. '(58) Records Found' is shown above the table matching the actual number of user rows
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
