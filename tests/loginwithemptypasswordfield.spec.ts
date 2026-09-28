import { test, expect } from '@playwright/test';

test('Login with empty password field', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that system prompts for missing password when password field is left blank
  await page.locator('Open the URL https://opensource-demo.orangehrmlive.com/').fill('Open the URL https://opensource-demo.orangehrmlive.com/');
  await page.locator("Enter username 'Admin' in the username field").fill("Enter username 'Admin' in the username field");
  await page.locator('Leave the password field empty').fill('Leave the password field empty');
  await expect(page).toContainText('System displays message indicating the missing mandatory password field and login is not processed');
});
