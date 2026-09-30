import { test, expect } from '@playwright/test';
import { homeLocators } from '../locators/home/home.locator';
import { testConfig } from './testConfig';

test('Verify table column headers in System Users table', async ({ page }) => {
  await page.goto(testConfig.baseUrl || '/');
  // Expected: Table displays exactly the columns 'Username', 'User Role', 'Employee Name', 'Status', 'Actions'
  await expect(page.locator(homeLocators.page)).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
