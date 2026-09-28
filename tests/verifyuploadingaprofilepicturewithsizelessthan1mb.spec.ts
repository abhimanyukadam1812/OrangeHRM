import { test, expect } from '@playwright/test';

test('Verify uploading a profile picture with size less than 1 MB', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that the system accepts profile picture uploads under 1 MB
  await page.getByText('Click on the profile picture upload button').click();
  await page.locator('Select an image file with size less than 1 MB').fill('Select an image file with size less than 1 MB');
  await page.getByText('Click Save to upload the picture').click();
  await expect(page).toContainText('Picture uploads successfully without any file size error');
});
