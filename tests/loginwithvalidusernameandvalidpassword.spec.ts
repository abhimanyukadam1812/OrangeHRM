import { test, expect } from '@playwright/test';

test('Login with valid Username and valid Password', async { page } => {
  await page.goto('/');
  // Scenario objective: Verify user can successfully log in to OrangeHRM with correct credentials
  await page.locator('Open the URL https://opensource-demo.orangehrmlive.com/').fill('Open the URL https://opensource-demo.orangehrmlive.com/');
  await page.locator("Enter username as 'Admin'").fill("Enter username as 'Admin'");
  await page.locator("Enter password as 'admin123'").fill("Enter password as 'admin123'");
  await expect(page).toContainText("User is redirected to the 'Personal Details' page (Dashboard) successfully");
});
