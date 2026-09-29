import { test, expect } from '@playwright/test';
import { loginLocators } from '../locators/login.locator';
import { testConfig } from './testConfig';

test('Login with invalid username and invalid password', async ({ page }) => {
  await page.goto(testConfig.loginPath);
  await page.locator(loginLocators.usernameInput).waitFor({ state: 'visible' });
  await page.locator(loginLocators.usernameInput).fill('invalid-user');
  await page.locator(loginLocators.passwordInput).fill(testConfig.wrongPassword);
  await page.locator(loginLocators.loginButton).click();
  // Expected: Error message 'Invalid credentials. Please enter valid username and password' is displayed and user remains on login page
  await expect(page.locator(loginLocators.error)).toBeVisible();
  await expect(page.locator(loginLocators.usernameInput)).toBeVisible();
});
