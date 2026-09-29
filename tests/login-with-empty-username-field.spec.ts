import { test, expect } from '@playwright/test';
import { loginLocators } from '../locators/login.locator';
import { testConfig } from './testConfig';

test('Login with empty username field', async ({ page }) => {
  await page.goto(testConfig.loginPath);
  await page.locator(loginLocators.usernameInput).waitFor({ state: 'visible' });
  await page.locator(loginLocators.usernameInput).fill('');
  await page.locator(loginLocators.passwordInput).fill(testConfig.password);
  await page.locator(loginLocators.loginButton).click();
  // Expected: Message 'Please enter the mandatory field Username' is displayed and login is not processed
  await expect(page.locator(loginLocators.error)).toBeVisible();
  await expect(page.locator(loginLocators.usernameInput)).toBeVisible();
});
