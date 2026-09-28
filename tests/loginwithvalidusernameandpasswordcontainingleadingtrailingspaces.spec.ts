import { test, expect } from '@playwright/test';

test('Login with valid username and password containing leading/trailing spaces', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate login behavior when valid credentials contain extra spaces
  await page.locator('Open the application URL').fill('Open the application URL');
  await page.locator("Enter username as ' Admin '").fill("Enter username as ' Admin '");
  await page.locator("Enter password as ' admin123 '").fill("Enter password as ' admin123 '");
  await expect(page).toContainText("Error message 'Invalid credentials. Please enter valid username and password' is displayed since spaces alter the credential validity");
});
