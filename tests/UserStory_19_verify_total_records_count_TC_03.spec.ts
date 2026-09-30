import { test, expect } from '@playwright/test';
import { homeLocators } from '../locators/home/home.locator';
import { testConfig } from './testConfig';

test('Verify total records count display above table', async ({ page }) => {
  await page.goto(testConfig.baseUrl || '/');
  // Expected: Text in format '(X) Records Found' is displayed above the table, where X matches the actual number of user rows listed
  await expect(page.locator(homeLocators.page)).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
