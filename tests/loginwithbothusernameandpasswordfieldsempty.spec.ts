import { test, expect } from '@playwright/test';

test('Login with both Username and Password fields empty', async { page } => {
  await page.goto('/');
  // Scenario objective: Verify system displays mandatory field validation when both username and password fields are left empty
  await page.locator('Open the URL https://opensource-demo.orangehrmlive.com/').fill('Open the URL https://opensource-demo.orangehrmlive.com/');
  await page.locator('Leave both username and password fields empty').fill('Leave both username and password fields empty');
  await page.getByText('Click on Login button').click();
  await expect(page).toContainText("Message 'Please enter the mandatory field/fields username and password' is displayed");
});
