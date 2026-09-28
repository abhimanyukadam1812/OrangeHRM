import { test, expect } from '@playwright/test';

test('Login with empty Password field', async { page } => {
  await page.goto('/');
  // Scenario objective: Verify system displays mandatory field validation when password field is left empty
  await page.locator('Open the URL https://opensource-demo.orangehrmlive.com/').fill('Open the URL https://opensource-demo.orangehrmlive.com/');
  await page.locator("Enter username as 'Admin'").fill("Enter username as 'Admin'");
  await page.locator('Leave the password field empty').fill('Leave the password field empty');
  await expect(page).toContainText("Message 'Please enter the mandatory field/fields password' is displayed");
});
