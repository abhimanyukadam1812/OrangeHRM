import { test, expect } from '@playwright/test';

test('Login with empty username field', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate mandatory field message when username is left empty
  await page.locator('Open the application URL').fill('Open the application URL');
  await page.locator('Leave username field empty').fill('Leave username field empty');
  await page.locator("Enter password as 'admin123'").fill("Enter password as 'admin123'");
  await expect(page).toContainText("Message 'Please enter the mandatory field/fields username' is displayed");
});
