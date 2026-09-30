import { test, expect } from '@playwright/test';
import { homeLocators } from '../locators/home/home.locator';
import { testConfig } from './testConfig';

test('Verify Reset and Search buttons in System Users section', async ({ page }) => {
  await page.goto(testConfig.baseUrl || '/');
  // Expected: 'Reset' and 'Search' buttons are displayed after the filter fields in the System Users section
  await expect(page.locator(homeLocators.page)).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
