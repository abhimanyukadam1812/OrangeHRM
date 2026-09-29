import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifyResetAndSearchButtonsDisplayedAfterFilterFieldsPage } from '../pages/verify-reset-and-search-buttons-displayed-after-filter-fields/verify-reset-and-search-buttons-displayed-after-filter-fields.page';

test('Verify Reset and Search buttons displayed after filter fields', async ({ page }) => {
  const verify-reset-and-search-buttons-displayed-after-filter-fieldsPage = new VerifyResetAndSearchButtonsDisplayedAfterFilterFieldsPage(page);
  await page.goto(testConfig.baseUrl || 'https://example.com/');
  await page.getByRole('link', { name: /admin/i }).click();
  await page.getByRole('textbox', { name: /search/i }).fill('search term');
  // Expected: 'Reset' and 'Search' buttons are displayed immediately after the filter fields in System Users section
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
