import { test, expect } from '@playwright/test';

test('Verify uploading a profile picture with size greater than 1 MB', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that the system rejects or handles profile picture uploads greater than 1 MB
  await page.getByText('Click on the profile picture upload button').click();
  await page.locator('Select an image file with size greater than 1 MB').fill('Select an image file with size greater than 1 MB');
  await page.getByText('Click Save to attempt the upload').click();
  await expect(page).toContainText('System displays an error message indicating the file size exceeds the allowed limit and the picture is not uploaded');
});
