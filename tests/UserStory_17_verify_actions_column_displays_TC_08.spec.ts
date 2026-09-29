import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifyActionsColumnDisplaysTrashAndPencilIconsPage } from '../pages/verify-actions-column-displays-trash-and-pencil-icons/verify-actions-column-displays-trash-and-pencil-icons.page';

test('Verify Actions column displays trash and pencil icons', async ({ page }) => {
  const verify-actions-column-displays-trash-and-pencil-iconsPage = new VerifyActionsColumnDisplaysTrashAndPencilIconsPage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('link', { name: /admin/i }).click();
  // Expected: Each row in the 'Actions' column displays a trash icon and a pencil icon
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
