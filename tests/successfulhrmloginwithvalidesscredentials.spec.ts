import { test, expect } from '@playwright/test';

test('Successful HRM login with valid ESS credentials', async { page } => {
  await page.goto('/');
  // Scenario objective: Verify ESS users can login with valid username and password credentials and access the Personal Details page.
  await page.locator('Open the application at https://opensource-demo.orangehrmlive.com/').fill('Open the application at https://opensource-demo.orangehrmlive.com/');
  await page.locator("Enter valid ESS username 'Admin' in the username field").fill("Enter valid ESS username 'Admin' in the username field");
  await page.locator("Enter valid ESS password 'admin123' in the password field").fill("Enter valid ESS password 'admin123' in the password field");
  await expect(page).toContainText('User successfully logs in and is redirected to the Personal Details page');
});
