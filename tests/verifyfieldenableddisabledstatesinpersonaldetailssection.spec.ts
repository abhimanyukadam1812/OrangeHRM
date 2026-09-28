import { test, expect } from '@playwright/test';

test('Verify field enabled/disabled states in Personal Details section', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that GUI elements in the contact details form have correct enabled/disabled states as per acceptance criteria
  await page.locator('Navigate to PIM > Personal Details > Contact Details form').fill('Navigate to PIM > Personal Details > Contact Details form');
  await page.locator('Inspect Full Name, Middle Name, Last Name, Other ID, License Expiry Date, Gender, Nationality, and Marital Status fields').fill('Inspect Full Name, Middle Name, Last Name, Other ID, License Expiry Date, Gender, Nationality, and Marital Status fields');
  await page.locator('Inspect Employee ID and Drivers License Number fields').fill('Inspect Employee ID and Drivers License Number fields');
  await expect(page).toContainText('Full Name, Middle Name, Last Name, Other ID, License Expiry Date, Gender, Nationality, and Marital Status are enabled and editable; Employee ID and Drivers License Number are disabled and non-editable');
});
