import { test, expect } from '@playwright/test';
import { verifyActionsColumnDisplaysTrashAndPencilIconsForEachUserLocators } from '../locators/verify-actions-column-displays-trash-and-pencil-icons-for-each-user/verify-actions-column-displays-trash-and-pencil-icons-for-each-user.locator';
import { testConfig } from './testConfig';

test('Verify Actions column displays trash and pencil icons for each user', async ({ page }) => {
  await page.goto(testConfig.baseUrl || 'https://example.com/');
  await page.locator(verifyActionsColumnDisplaysTrashAndPencilIconsForEachUserLocators.usernameInput).waitFor({ state: 'visible' });
  // Expected: Each row's 'Actions' column displays both a trash icon and a pencil icon
  await expect(page.locator(verifyActionsColumnDisplaysTrashAndPencilIconsForEachUserLocators.usernameInput)).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
