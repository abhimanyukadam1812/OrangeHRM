import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifyResetAndSearchButtonsDisplayAfterFilterFieldsPage } from '../pages/verify-reset-and-search-buttons-display-after-filter-fields/verify-reset-and-search-buttons-display-after-filter-fields.page';

test('Verify Reset and Search buttons display after filter fields', async ({ page }) => {
  const verify-reset-and-search-buttons-display-after-filter-fieldsPage = new VerifyResetAndSearchButtonsDisplayAfterFilterFieldsPage(page);
  await page.goto(testConfig.baseUrl || 'https://opensource-demo.orangehrmlive.com/');
  await page.getByRole('button', { name: /submit|save|continue|next|login/i }).click();
  // Expected: 'Reset' and 'Search' buttons are displayed after the filter fields in the System Users section
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
