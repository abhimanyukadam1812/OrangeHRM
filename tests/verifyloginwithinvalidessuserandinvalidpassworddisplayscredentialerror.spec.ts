import { test, expect } from '@playwright/test';

test('Verify login with invalid ESS user and invalid password displays credential erro', async { page } => {
  await page.goto('/');
  // Scenario objective: Ensure that when both username and password are invalid, the system displays the error message 'Credentials not valid'
  await page.locator('Open the application at https://opensource-demo.orangehrmlive.com/').fill('Open the application at https://opensource-demo.orangehrmlive.com/');
  await page.locator('Enter an invalid ESS username in the username field').fill('Enter an invalid ESS username in the username field');
  await page.locator('Enter an invalid ESS password in the password field').fill('Enter an invalid ESS password in the password field');
  await expect(page).toContainText("Error message 'Credentials not valid' is displayed on the login page and user remains on the login screen without accessing the Personal Details page");
});
