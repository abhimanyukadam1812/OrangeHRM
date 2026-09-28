import { test, expect } from '@playwright/test';

test('Login with valid username and valid password', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that a user can successfully log in to HRM application using correct credentials
  await page.locator('Open the application URL').fill('Open the application URL');
  await page.locator("Enter username as 'Admin'").fill("Enter username as 'Admin'");
  await page.locator("Enter password as 'admin123'").fill("Enter password as 'admin123'");
  await expect(page).toContainText("User is redirected to 'Personal Details' page confirming successful login");
});
