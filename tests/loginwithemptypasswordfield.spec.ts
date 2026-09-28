import { test, expect } from '@playwright/test';

test('Login with empty password field', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate mandatory field message when password is left empty
  await page.locator('Open the application URL').fill('Open the application URL');
  await page.locator("Enter username as 'Admin'").fill("Enter username as 'Admin'");
  await page.locator('Leave password field empty').fill('Leave password field empty');
  await expect(page).toContainText("Message 'Please enter the mandatory field/fields password' is displayed");
});
