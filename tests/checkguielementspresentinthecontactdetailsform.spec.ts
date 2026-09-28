import { test, expect } from '@playwright/test';

test('Check GUI elements present in the contact details form', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that all expected GUI elements (labels, input boxes, dropdowns, buttons) are present in the Personal Details form
  await page.locator('Open the Contact Details form under Personal Details').fill('Open the Contact Details form under Personal Details');
  await page.locator('Verify presence of Full Name, Middle Name, Last Name, Employee ID, Other ID, Drivers License Number, License Expiry Date, Gender, Nationality, Marital Status fields').fill('Verify presence of Full Name, Middle Name, Last Name, Employee ID, Other ID, Drivers License Number, License Expiry Date, Gender, Nationality, Marital Status fields');
  await page.locator('Verify presence of Save button and Upload Picture option').fill('Verify presence of Save button and Upload Picture option');
  await expect(page).toContainText('All required GUI elements (text boxes, dropdowns, date picker, Save button, Upload Picture control) are displayed correctly in the contact details form');
});
