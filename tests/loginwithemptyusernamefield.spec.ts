import { test, expect } from '@playwright/test';

test('Login with empty Username field', async { page } => {
  await page.goto('/');
  // Scenario objective: Verify system displays mandatory field validation when username field is left empty
  await page.locator('Open the URL https://opensource-demo.orangehrmlive.com/').fill('Open the URL https://opensource-demo.orangehrmlive.com/');
  await page.locator('Leave the username field empty').fill('Leave the username field empty');
  await page.locator("Enter password as 'admin123'").fill("Enter password as 'admin123'");
  await expect(page).toContainText("Message 'Please enter the mandatory field/fields username' is displayed");
});
