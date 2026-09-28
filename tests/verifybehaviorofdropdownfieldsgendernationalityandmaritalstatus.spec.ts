import { test, expect } from '@playwright/test';

test('Verify behavior of dropdown fields Gender, Nationality, and Marital Status', async { page } => {
  await page.goto('/');
  // Scenario objective: Validate that dropdown GUI elements behave correctly when selecting values
  await page.getByText('Click on Gender dropdown and select Male/Female').click();
  await page.getByText('Click on Nationality dropdown and select a country').click();
  await page.getByText('Click on Marital Status dropdown and select Single/Married').click();
  await expect(page).toContainText('Each dropdown opens correctly, displays valid options, and allows selection of a value without errors');
});
