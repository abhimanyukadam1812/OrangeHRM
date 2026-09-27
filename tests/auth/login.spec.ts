import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { testConfig } from '../testConfig';

/**
 * OrangeHRM login suite (Page Object Model style).
 *
 * Runs against the public demo by default — see tests/testConfig.ts and
 * .env.example to point the suite at a different instance or user.
 */
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

test('valid demo credentials sign in to the dashboard', async ({ page }) => {
  await loginPage.login(testConfig.username, testConfig.password);

  // On success the app navigates away from the login route...
  await expect(page).not.toHaveURL(/auth\/login/);
  // ...and the login form (a single-page component) is gone.
  await expect(loginPage.usernameInput).toHaveCount(0);
});

test('wrong password is rejected and stays on the login form', async ({ page }) => {
  await loginPage.login(testConfig.username, testConfig.wrongPassword);

  // An error message is surfaced and the form remains for another attempt.
  await expect(loginPage.error).toBeVisible();
  await expect(loginPage.usernameInput).toBeVisible();
  await expect(page).toHaveURL(/auth\/login/);
});

test('login form is rendered with username, password and a login button', async () => {
  // Guards against the SPA failing to mount (regression: blank page).
  await expect(loginPage.usernameInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
  await expect(loginPage.loginButton).toBeVisible();
});
