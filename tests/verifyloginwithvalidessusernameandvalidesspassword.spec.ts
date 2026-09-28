import { test, expect } from '@playwright/test';

test('Verify login with valid ESS username and valid ESS password', async { page } => {
  await page.goto('/');
  // Scenario objective: Ensure that an ESS user can successfully log in with valid credentials and access the Personal Details page
  await page.locator('Navigate to https://opensource-demo.orangehrmlive.com/').fill('Navigate to https://opensource-demo.orangehrmlive.com/');
  await page.locator("Enter 'Admin' in the ESS username field").fill("Enter 'Admin' in the ESS username field");
  await page.locator("Enter 'admin123' in the ESS password field").fill("Enter 'admin123' in the ESS password field");
  await expect(page).toContainText('The user is successfully authenticated and the Personal Details page is displayed');
});
