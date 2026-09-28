import { test, expect } from '@playwright/test';

test('Login with invalid username and invalid password', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that login fails when both username and password are incorrect
  await page.locator('Open the application URL').fill('Open the application URL');
  await page.locator("Enter username as 'InvalidUser'").fill("Enter username as 'InvalidUser'");
  await page.locator("Enter password as 'wrongpass'").fill("Enter password as 'wrongpass'");
  await expect(page).toContainText("Error message 'Invalid credentials. Please enter valid username and password' is displayed");
});
