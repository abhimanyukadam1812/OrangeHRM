import { test, expect } from '@playwright/test';

test('Login with valid username and valid password', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that a user can successfully log in to HRM with correct credentials
  await page.locator('Open the URL https://opensource-demo.orangehrmlive.com/').fill('Open the URL https://opensource-demo.orangehrmlive.com/');
  await page.locator("Enter username 'Admin' in the username field").fill("Enter username 'Admin' in the username field");
  await page.locator("Enter password 'admin123' in the password field").fill("Enter password 'admin123' in the password field");
  await expect(page).toContainText("User is redirected to the 'Personal Details' page confirming successful login");
});
