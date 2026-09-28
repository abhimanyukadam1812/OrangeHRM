import { test, expect } from '@playwright/test';

test('Verify login with valid Admin credentials', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that a user can log in successfully to access Personal Details section
  await page.locator('Navigate to the login page').fill('Navigate to the login page');
  await page.locator("Enter username 'Admin' and password 'admin123'").fill("Enter username 'Admin' and password 'admin123'");
  await page.getByText('Click the Login button').click();
  await expect(page).toContainText('User is logged in successfully and Personal Details/Contact Details form is displayed');
});
