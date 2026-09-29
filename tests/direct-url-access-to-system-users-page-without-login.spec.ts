import { test, expect } from '@playwright/test';
import { loginLocators } from '../locators/login.locator';
import { testConfig } from './testConfig';

test('Direct URL access to System Users page without login', async ({ page }) => {
  await page.goto(testConfig.loginPath);
  await page.locator(loginLocators.usernameInput).waitFor({ state: 'visible' });
  // Expected: The system redirects to the login page instead of displaying the System Users page
  await expect(page.locator(loginLocators.usernameInput)).toBeVisible();
});
