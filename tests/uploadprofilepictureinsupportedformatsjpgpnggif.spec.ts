import { test, expect } from '@playwright/test';

test('Upload profile picture in supported formats (jpg, png, gif)', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that user can upload a picture in jpg, png, and gif formats
  await page.getByText('Click Upload Picture option in Personal Details section').click();
  await page.locator('Select a .jpg image file and upload').fill('Select a .jpg image file and upload');
  await page.locator('Repeat upload process with a .png file and a .gif file').fill('Repeat upload process with a .png file and a .gif file');
  await expect(page).toContainText('Pictures in jpg, png, and gif formats are uploaded successfully and displayed as the profile picture');
});
