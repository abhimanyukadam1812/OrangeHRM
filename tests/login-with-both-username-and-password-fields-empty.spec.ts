import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login/login.page';

test('Login with both username and password fields empty', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByLabel(/username/i).fill('Admin');
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await expect(page).toContainText("Message 'Required' is displayed under both username and password fields and login is not processed");
});
