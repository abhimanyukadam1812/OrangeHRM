import { test, expect } from '@playwright/test';

test('Verify uploading a profile picture in png and gif formats', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that user can upload pictures in png and gif formats successfully
  await page.getByText('Click on the profile picture upload button').click();
  await page.locator('Select a valid png image file and upload, then verify success').fill('Select a valid png image file and upload, then verify success');
  await page.locator('Repeat upload process using a valid gif image file').fill('Repeat upload process using a valid gif image file');
  await expect(page).toContainText('Both png and gif images are uploaded successfully and displayed as the profile photo');
});
