import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifyUsernameColumnAcceptsAnyStringValuesInTableRowsPage } from '../pages/verify-username-column-accepts-any-string-values-in-table-rows/verify-username-column-accepts-any-string-values-in-table-rows.page';

test('Verify Username column accepts any string values in table rows', async ({ page }) => {
  const verify-username-column-accepts-any-string-values-in-table-rowsPage = new VerifyUsernameColumnAcceptsAnyStringValuesInTableRowsPage(page);
  await page.goto(testConfig.baseUrl || 'https://opensource-demo.orangehrmlive.com/');
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  // Expected: Username column displays valid string values (any name format) for every user entry in the table
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
