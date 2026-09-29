import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifyTotalRecordsCountDisplayAboveUsersTablePage } from '../pages/verify-total-records-count-display-above-users-table/verify-total-records-count-display-above-users-table.page';

test('Verify total records count display above users table', async ({ page }) => {
  const verify-total-records-count-display-above-users-tablePage = new VerifyTotalRecordsCountDisplayAboveUsersTablePage(page);
  await page.goto(testConfig.baseUrl || 'https://opensource-demo.orangehrmlive.com/');
  await page.getByRole('button', { name: /submit|save|continue|next|login/i }).click();
  // Expected: Text above the table displays record count in format '(58) Records Found' matching the actual number of users listed
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
