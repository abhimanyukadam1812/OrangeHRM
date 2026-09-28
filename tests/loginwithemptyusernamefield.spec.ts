import { test, expect } from '@playwright/test';

test('Login with empty username field', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that system prompts for missing username when username field is left blank
  await page.locator('Open the URL https://opensource-demo.orangehrmlive.com/').fill('Open the URL https://opensource-demo.orangehrmlive.com/');
  await page.locator('Leave the username field empty').fill('Leave the username field empty');
  await page.locator("Enter password 'admin123' in the password field").fill("Enter password 'admin123' in the password field");
  await expect(page).toContainText('System displays message indicating the missing mandatory username field and login is not processed');
});
