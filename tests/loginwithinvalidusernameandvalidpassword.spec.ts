import { test, expect } from '@playwright/test';

test('Login with invalid username and valid password', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that login fails when username is incorrect even if password format is valid
  await page.locator('Open the URL https://opensource-demo.orangehrmlive.com/').fill('Open the URL https://opensource-demo.orangehrmlive.com/');
  await page.locator("Enter username 'WrongAdmin' in the username field").fill("Enter username 'WrongAdmin' in the username field");
  await page.locator("Enter password 'admin123' in the password field").fill("Enter password 'admin123' in the password field");
  await expect(page).toContainText("Error message 'Incorrect Credentials, Please enter valid username and password' is displayed and Personal Details page is not shown");
});
