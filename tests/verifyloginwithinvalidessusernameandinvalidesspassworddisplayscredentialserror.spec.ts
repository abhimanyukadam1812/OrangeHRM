import { test, expect } from '@playwright/test';

test('Verify login with invalid ESS username and invalid ESS password displays credent', async { page } => {
  await page.goto('/');
  // Scenario objective: Ensure that when both username and password are invalid, the system displays the 'Credentials not valid' error message
  await page.locator('Navigate to https://opensource-demo.orangehrmlive.com/').fill('Navigate to https://opensource-demo.orangehrmlive.com/');
  await page.locator('Enter an invalid ESS username in the username field').fill('Enter an invalid ESS username in the username field');
  await page.locator('Enter an invalid ESS password in the password field').fill('Enter an invalid ESS password in the password field');
  await expect(page).toContainText("The error message 'Credentials not valid' is displayed on the login page, and the user remains on the login page without accessing the Personal Details page");
});
