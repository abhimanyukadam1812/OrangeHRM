import { test, expect } from '@playwright/test';

test('Login with valid username and invalid password', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that login fails when username is valid but password is incorrect
  await page.locator('Open the application URL').fill('Open the application URL');
  await page.locator("Enter username as 'Admin'").fill("Enter username as 'Admin'");
  await page.locator("Enter password as 'wrongpass'").fill("Enter password as 'wrongpass'");
  await expect(page).toContainText("Error message 'Invalid credentials. Please enter valid username and password' is displayed");
});
