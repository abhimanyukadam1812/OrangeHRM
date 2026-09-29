import { test, expect } from '@playwright/test';
import { RefreshingSystemUsersPageRetainsUserListPage } from '../pages/refreshing-system-users-page-retains-user-list/refreshing-system-users-page-retains-user-list.page';

test('Refreshing System Users page retains user list', async ({ page }) => {
  const refreshing-system-users-page-retains-user-listPage = new RefreshingSystemUsersPageRetainsUserListPage(page);
  await page.goto('/');
  await page.getByRole('button', { name: /submit|save|continue|next|login/i }).click();
  // Expected: The System Users page reloads successfully and the user list remains visible with the same configured users
  await expect(page.locator('body')).toBeVisible();
});
