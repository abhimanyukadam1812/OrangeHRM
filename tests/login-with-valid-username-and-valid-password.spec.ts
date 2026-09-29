import { test, expect } from '@playwright/test';
import { loginLocators } from '../locators/login.locator';
import { testConfig } from './testConfig';

test('Login with valid username and valid password', async ({ page }) => {
  await page.goto(testConfig.loginPath);
  await page.locator(loginLocators.usernameInput).waitFor({ state: 'visible' });
  await page.locator(loginLocators.usernameInput).fill(testConfig.username);
  await page.locator(loginLocators.passwordInput).fill(testConfig.password);
  await page.locator(loginLocators.loginButton).click();
  // Expected: User is successfully logged in and redirected to the 'Personal Details' page
  await expect(page).not.toHaveURL(new RegExp(testConfig.loginPath));
});
