import { test, expect } from '@playwright/test';

test('Login with both username and password fields empty', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that system prompts for missing mandatory fields when both username and password are blank
  await page.locator('Open the URL https://opensource-demo.orangehrmlive.com/').fill('Open the URL https://opensource-demo.orangehrmlive.com/');
  await page.locator('Leave the username field empty').fill('Leave the username field empty');
  await page.locator('Leave the password field empty').fill('Leave the password field empty');
  await expect(page).toContainText('System displays messages indicating both username and password are required and Personal Details page is not shown');
});
