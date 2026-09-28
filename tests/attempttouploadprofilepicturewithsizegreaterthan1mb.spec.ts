import { test, expect } from '@playwright/test';

test('Attempt to upload profile picture with size greater than 1 MB', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that the system rejects picture uploads exceeding 1 MB size limit
  await page.getByText('Click Upload Picture option in Personal Details section').click();
  await page.locator('Select an image file with size greater than 1 MB').fill('Select an image file with size greater than 1 MB');
  await page.locator('Attempt to Save/Upload the file').fill('Attempt to Save/Upload the file');
  await expect(page).toContainText('System displays an error message indicating the file size exceeds the 1 MB limit and the picture is not uploaded');
});
