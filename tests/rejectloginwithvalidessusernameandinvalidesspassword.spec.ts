import { test, expect } from '@playwright/test';

test('Reject login with valid ESS username and invalid ESS password', async { page } => {
  await page.goto('/');
  // Scenario objective: Verify that login attempt with valid ESS username and invalid ESS password is rejected with error message.
  await page.locator('Open the application at https://opensource-demo.orangehrmlive.com/').fill('Open the application at https://opensource-demo.orangehrmlive.com/');
  await page.locator("Enter valid ESS username 'Admin' in the username field").fill("Enter valid ESS username 'Admin' in the username field");
  await page.locator("Enter an invalid ESS password (not 'admin123') in the password field").fill("Enter an invalid ESS password (not 'admin123') in the password field");
  await expect(page).toContainText("The system rejects the login attempt and displays error message 'Credentials not valid'. User is not redirected to Personal Details page and remains on the login page.");
});
