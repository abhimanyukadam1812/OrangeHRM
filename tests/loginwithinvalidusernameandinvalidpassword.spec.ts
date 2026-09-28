import { test, expect } from '@playwright/test';

test('Login with invalid username and invalid password', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that login fails when both username and password are incorrect
  await page.locator('Open the URL https://opensource-demo.orangehrmlive.com/').fill('Open the URL https://opensource-demo.orangehrmlive.com/');
  await page.locator("Enter username 'WrongAdmin' in the username field").fill("Enter username 'WrongAdmin' in the username field");
  await page.locator("Enter password 'wrongPass123' in the password field").fill("Enter password 'wrongPass123' in the password field");
  await expect(page).toContainText("Error message 'Incorrect Credentials, Please enter valid username and password' is displayed");
});
