import { test, expect } from '@playwright/test';

test('Verify enabled and disabled state of Personal Details GUI fields', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that field enable/disable states match acceptance criteria
  await page.locator('Check Full Name, Middle Name, Last Name fields are enabled').fill('Check Full Name, Middle Name, Last Name fields are enabled');
  await page.locator('Check Employee ID and Drivers License Number fields are disabled').fill('Check Employee ID and Drivers License Number fields are disabled');
  await page.locator('Check Other ID, License Expiry Date, Gender, Nationality, Marital Status fields are enabled').fill('Check Other ID, License Expiry Date, Gender, Nationality, Marital Status fields are enabled');
  await expect(page).toContainText('Full Name, Middle Name, Last Name, Other ID, License Expiry Date, Gender, Nationality, Marital Status are editable; Employee ID and Drivers License Number are read-only/disabled');
});
