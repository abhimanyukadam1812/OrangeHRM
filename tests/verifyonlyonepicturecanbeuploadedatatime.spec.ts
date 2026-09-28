import { test, expect } from '@playwright/test';

test('Verify only one picture can be uploaded at a time', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that the upload picture control restricts selection to a single image file
  await page.getByText('Click Upload Picture option in Personal Details section').click();
  await page.locator('Attempt to select multiple image files simultaneously in the file upload dialog').fill('Attempt to select multiple image files simultaneously in the file upload dialog');
  await page.locator('Observe the upload behavior').fill('Observe the upload behavior');
  await expect(page).toContainText('Only one picture file is accepted and uploaded; system does not allow multiple simultaneous picture uploads');
});
