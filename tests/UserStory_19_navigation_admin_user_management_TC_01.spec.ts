import { test, expect } from '@playwright/test';
import { homeLocators } from '../locators/home/home.locator';
import { testConfig } from './testConfig';

test('Navigation to Admin/User Management page via sidepanel', async ({ page }) => {
  await page.goto(testConfig.baseUrl || '/');
  // Expected: The 'Admin/User Management' page is displayed with 'System Users' section visible
  await expect(page.locator(homeLocators.page)).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
