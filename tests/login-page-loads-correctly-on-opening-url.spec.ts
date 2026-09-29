import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login/login.page';

test('Login page loads correctly on opening URL', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await expect(page).toContainText('Login page is displayed with username field, password field, and Login button visible');
});
