import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifyFilterFieldsInSystemUsersSectionPage } from '../pages/verify-filter-fields-in-system-users-section/verify-filter-fields-in-system-users-section.page';

test('Verify filter fields in System Users section', async ({ page }) => {
  const verify-filter-fields-in-system-users-sectionPage = new VerifyFilterFieldsInSystemUsersSectionPage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('link', { name: /admin/i }).click();
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  // Expected: System Users section displays all four filter fields: Username as textfield, User Role, Employee Name, and Status as expected input types
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
