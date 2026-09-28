import { test, expect } from '@playwright/test';

test('Verify login with invalid ESS username and invalid ESS password displays 'Creden', async { page } => {
  await page.goto('/');
  // Scenario objective: Ensure that when an ESS user enters both invalid username and invalid password, the system displays the 'Credentials not valid' error message
  await page.locator('Navigate to https://opensource-demo.orangehrmlive.com/').fill('Navigate to https://opensource-demo.orangehrmlive.com/');
  await page.locator("Enter an invalid ESS username (e.g., 'InvalidUser') in the username field").fill("Enter an invalid ESS username (e.g., 'InvalidUser') in the username field");
  await page.locator("Enter an invalid ESS password (e.g., 'wrongpassword') in the password field").fill("Enter an invalid ESS password (e.g., 'wrongpassword') in the password field");
  await expect(page).toContainText("The system displays the error message 'Credentials not valid' and the user remains on the login page without being authenticated");
});
