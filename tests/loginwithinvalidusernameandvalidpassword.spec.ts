import { test, expect } from '@playwright/test';

test('Login with invalid Username and valid Password', async { page } => {
  await page.goto('/');
  // Scenario objective: Verify system rejects login attempt when username is invalid but password is valid
  await page.locator('Open the URL https://opensource-demo.orangehrmlive.com/').fill('Open the URL https://opensource-demo.orangehrmlive.com/');
  await page.locator("Enter username as 'InvalidUser'").fill("Enter username as 'InvalidUser'");
  await page.locator("Enter password as 'admin123'").fill("Enter password as 'admin123'");
  await expect(page).toContainText("Error message 'Invalid credentials. Please enter valid username and password' is displayed");
});
