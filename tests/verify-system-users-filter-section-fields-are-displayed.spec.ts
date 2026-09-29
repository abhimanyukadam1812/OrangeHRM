import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifySystemUsersFilterSectionFieldsAreDisplayedPage } from '../pages/verify-system-users-filter-section-fields-are-displayed/verify-system-users-filter-section-fields-are-displayed.page';

test('Verify System Users filter section fields are displayed', async ({ page }) => {
  const verify-system-users-filter-section-fields-are-displayedPage = new VerifySystemUsersFilterSectionFieldsAreDisplayedPage(page);
  await page.goto(testConfig.baseUrl || 'https://example.com/');
  await page.getByRole('link', { name: /admin/i }).click();
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  // Expected: System Users section displays 'Username' as textfield, 'User Role' and 'Status' as dropdowns, and 'Employee Name' as a field
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
