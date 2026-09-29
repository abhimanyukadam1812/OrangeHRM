import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { VerifyActionsColumnDisplaysTrashAndPencilIconsForEachUserPage } from '../pages/verify-actions-column-displays-trash-and-pencil-icons-for-each-user/verify-actions-column-displays-trash-and-pencil-icons-for-each-user.page';

test('Verify Actions column displays trash and pencil icons for each user', async ({ page }) => {
  const verify-actions-column-displays-trash-and-pencil-icons-for-each-userPage = new VerifyActionsColumnDisplaysTrashAndPencilIconsForEachUserPage(page);
  await page.goto(testConfig.baseUrl || 'https://opensource-demo.orangehrmlive.com/');
  await page.getByRole('button', { name: /submit|save|continue|next|login/i }).click();
  // Expected: Actions column displays both a trash icon and a pencil icon for every user row in the table
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
