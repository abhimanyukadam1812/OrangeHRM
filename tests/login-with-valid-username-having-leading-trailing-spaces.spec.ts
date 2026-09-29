import { test, expect } from '@playwright/test';
import { loginLocators } from '../locators/login.locator';
import { testConfig } from './testConfig';

test('Login with valid username having leading/trailing spaces', async ({ page }) => {
  await page.goto(testConfig.loginPath);
  await page.locator(loginLocators.usernameInput).waitFor({ state: 'visible' });
  await page.locator(loginLocators.usernameInput).fill(testConfig.username);
  await page.locator(loginLocators.passwordInput).fill(testConfig.password);
  await page.locator(loginLocators.loginButton).click();
  // Expected: System either trims spaces and logs in successfully to 'Personal Details' page or displays 'Invalid credentials. Please enter valid username and password' if spaces are treated as invalid input
  await expect(page.locator(loginLocators.error)).toBeVisible();
  await expect(page.locator(loginLocators.usernameInput)).toBeVisible();
});
