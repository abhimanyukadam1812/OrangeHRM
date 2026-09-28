import { test, expect } from '@playwright/test';

test('Login with valid credentials containing leading/trailing spaces', async { page } => {
  await page.goto('/');
  // Scenario objective: Verify system handles valid username and password with extra spaces correctly
  await page.locator('Open the URL https://opensource-demo.orangehrmlive.com/').fill('Open the URL https://opensource-demo.orangehrmlive.com/');
  await page.locator("Enter username as ' Admin '").fill("Enter username as ' Admin '");
  await page.locator("Enter password as ' admin123 '").fill("Enter password as ' admin123 '");
  await expect(page).toContainText("Error message 'Invalid credentials. Please enter valid username and password' is displayed as system does not trim spaces");
});
