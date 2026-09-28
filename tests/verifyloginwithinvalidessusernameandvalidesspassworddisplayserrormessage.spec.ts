import { test, expect } from '@playwright/test';

test('Verify login with invalid ESS username and valid ESS password displays error mes', async { page } => {
  await page.goto('/');
  // Scenario objective: Ensure that attempting to login with an invalid ESS username and valid ESS password displays the 'Credentials not valid' error message
  await page.locator('Navigate to https://opensource-demo.orangehrmlive.com/').fill('Navigate to https://opensource-demo.orangehrmlive.com/');
  await page.locator('Enter an invalid ESS username in the username field').fill('Enter an invalid ESS username in the username field');
  await page.locator("Enter the valid ESS password 'admin123' in the password field").fill("Enter the valid ESS password 'admin123' in the password field");
  await expect(page).toContainText("The error message 'Credentials not valid' is displayed on the login page and the user is not redirected to the Personal Details page");
});
