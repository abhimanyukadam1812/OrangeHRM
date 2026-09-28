import { test, expect } from '@playwright/test';

test('Verify contact details are updated and saved successfully', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that changes made to enabled contact detail fields are saved correctly
  await page.locator('Update Full Name, Middle Name, and Last Name fields with new values').fill('Update Full Name, Middle Name, and Last Name fields with new values');
  await page.locator('Update Other ID and License Expiry Date fields').fill('Update Other ID and License Expiry Date fields');
  await page.getByText('Click Save button').click();
  await expect(page).toContainText('Updated values for Full Name, Middle Name, Last Name, Other ID, and License Expiry Date are saved and displayed correctly after page reload');
});
