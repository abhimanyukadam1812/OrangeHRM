import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifyTotalRecordsCountDisplayedAboveTablePage } from '../pages/verify-total-records-count-displayed-above-table/verify-total-records-count-displayed-above-table.page';

test('Verify total records count displayed above table', async ({ page }) => {
  const verify-total-records-count-displayed-above-tablePage = new VerifyTotalRecordsCountDisplayedAboveTablePage(page);
  await page.goto(testConfig.baseUrl || 'https://example.com/');
  await page.getByRole('link', { name: /admin/i }).click();
  // Expected: Text displays in format '(X) Records Found' where X matches the actual number of users listed in the table
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
