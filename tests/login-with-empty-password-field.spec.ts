import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login/login.page';

test('Login with empty password field', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByLabel(/username/i).fill('Admin');
  await page.getByLabel(/password/i).fill('admin123');
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await expect(page).toContainText("Message 'Please enter the mandatory field password' is displayed");
});
