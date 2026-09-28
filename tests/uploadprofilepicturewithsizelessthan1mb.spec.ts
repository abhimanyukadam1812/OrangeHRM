import { test, expect } from '@playwright/test';

test('Upload profile picture with size less than 1 MB', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that the system accepts picture uploads under 1 MB
  await page.getByText('Click Upload Picture option in Personal Details section').click();
  await page.locator('Select an image file with size less than 1 MB').fill('Select an image file with size less than 1 MB');
  await page.getByText('Click Save/Upload button').click();
  await expect(page).toContainText('Picture uploads successfully without error and is saved as the profile picture');
});
