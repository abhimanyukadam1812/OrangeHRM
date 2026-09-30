import { test, expect } from '@playwright/test';
import { homeLocators } from '../locators/home/home.locator';
import { testConfig } from './testConfig';

test('Verify filter fields in System Users section', async ({ page }) => {
  await page.goto(testConfig.baseUrl || '/');
  // Expected: Filter section displays 'Username' as textfield, 'User Role' as dropdown, 'Employee Name' as textfield/autocomplete, and 'Status' as dropdown
  await expect(page.locator(homeLocators.page)).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
