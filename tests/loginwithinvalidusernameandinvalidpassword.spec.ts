import { test, expect } from '@playwright/test';

test('Login with invalid Username and invalid Password', async { page } => {
  await page.goto('/');
  // Scenario objective: Verify system rejects login attempt when both username and password are invalid
  await page.locator('Open the URL https://opensource-demo.orangehrmlive.com/').fill('Open the URL https://opensource-demo.orangehrmlive.com/');
  await page.locator("Enter username as 'WrongAdmin'").fill("Enter username as 'WrongAdmin'");
  await page.locator("Enter password as 'wrongPass123'").fill("Enter password as 'wrongPass123'");
  await expect(page).toContainText("Error message 'Invalid credentials. Please enter valid username and password' is displayed");
});
