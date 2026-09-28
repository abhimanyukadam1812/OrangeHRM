import { test, expect } from '@playwright/test';

test('Login with invalid username and valid password', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that login fails when username is invalid but password is valid
  await page.locator('Open the application URL').fill('Open the application URL');
  await page.locator("Enter username as 'InvalidUser'").fill("Enter username as 'InvalidUser'");
  await page.locator("Enter password as 'admin123'").fill("Enter password as 'admin123'");
  await expect(page).toContainText("Error message 'Invalid credentials. Please enter valid username and password' is displayed");
});
