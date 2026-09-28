import { test, expect } from '@playwright/test';

test('Verify uploading a profile picture in jpg format', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that user can upload a picture in jpg format successfully
  await page.getByText('Click on the profile picture upload button').click();
  await page.locator('Select a valid jpg image file from local system').fill('Select a valid jpg image file from local system');
  await page.getByText('Click Save to upload the picture').click();
  await expect(page).toContainText('Picture is uploaded successfully and displayed as the new profile photo');
});
