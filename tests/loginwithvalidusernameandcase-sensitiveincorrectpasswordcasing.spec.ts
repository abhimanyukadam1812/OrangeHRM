import { test, expect } from '@playwright/test';

test('Login with valid username and case-sensitive incorrect password casing', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that password field is case-sensitive during login authentication
  await page.locator('Open the URL https://opensource-demo.orangehrmlive.com/').fill('Open the URL https://opensource-demo.orangehrmlive.com/');
  await page.locator("Enter username 'Admin' in the username field").fill("Enter username 'Admin' in the username field");
  await page.locator("Enter password 'ADMIN123' in the password field").fill("Enter password 'ADMIN123' in the password field");
  await expect(page).toContainText("Error message 'Incorrect Credentials, Please enter valid username and password' is displayed due to case mismatch");
});
