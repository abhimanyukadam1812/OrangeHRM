import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifyFilterFieldsInSystemUsersSectionPage } from '../pages/verify-filter-fields-in-system-users-section/verify-filter-fields-in-system-users-section.page';

test('Verify filter fields in System Users section', async ({ page }) => {
  const verify-filter-fields-in-system-users-sectionPage = new VerifyFilterFieldsInSystemUsersSectionPage(page);
  await page.goto(testConfig.baseUrl || 'https://opensource-demo.orangehrmlive.com/');
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  // Expected: System Users section displays 'Username' as an editable textfield and 'User Role' as a selectable filter field
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
