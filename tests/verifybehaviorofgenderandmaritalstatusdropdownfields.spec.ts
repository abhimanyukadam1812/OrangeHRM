import { test, expect } from '@playwright/test';

test('Verify behavior of Gender and Marital Status dropdown fields', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that dropdown GUI elements respond correctly to user selection
  await page.getByText("Click on the Gender dropdown and select 'Female'").click();
  await page.getByText("Click on the Marital Status dropdown and select 'Married'").click();
  await page.getByText('Click on the Nationality dropdown and select a valid nationality').click();
  await expect(page).toContainText('Selected values are reflected correctly in Gender, Marital Status, and Nationality dropdowns without errors');
});
