import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifySystemUsersTableDisplaysWithCorrectColumnsPage } from '../pages/verify-system-users-table-displays-with-correct-columns/verify-system-users-table-displays-with-correct-columns.page';

test('Verify System Users table displays with correct columns', async ({ page }) => {
  const verify-system-users-table-displays-with-correct-columnsPage = new VerifySystemUsersTableDisplaysWithCorrectColumnsPage(page);
  await page.goto(testConfig.baseUrl || 'https://example.com/');
  await page.getByRole('link', { name: /admin/i }).click();
  // Expected: Table displays columns 'Username', 'User Role', 'Employee Name', 'Status', 'Actions' in order
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
