import { test, expect } from '@playwright/test';

test('Login with both username and password fields empty', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate mandatory field message when both username and password are left empty
  await page.locator('Open the application URL').fill('Open the application URL');
  await page.locator('Leave username field empty').fill('Leave username field empty');
  await page.locator('Leave password field empty').fill('Leave password field empty');
  await expect(page).toContainText("Message 'Please enter the mandatory field/fields username, password' is displayed");
});
