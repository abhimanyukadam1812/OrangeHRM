import { test, expect } from '@playwright/test';

test('Verify updating and saving contact details in Personal Details form', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that updated Full Name, Middle Name, and Last Name are saved successfully
  await page.locator("Update Full Name field to 'John Updated'").fill("Update Full Name field to 'John Updated'");
  await page.locator("Update Middle Name field to 'Kumar'").fill("Update Middle Name field to 'Kumar'");
  await page.locator("Update Last Name field to 'Doe'").fill("Update Last Name field to 'Doe'");
  await expect(page).toContainText('Contact details are updated and saved successfully, with a confirmation message displayed and refreshed page showing new values');
});
