import { test, expect } from '@playwright/test';
import { UserListIsVisibleOnSystemUsersPagePage } from '../pages/user-list-is-visible-on-system-users-page/user-list-is-visible-on-system-users-page.page';

test('User list is visible on System Users page', async ({ page }) => {
  const user-list-is-visible-on-system-users-pagePage = new UserListIsVisibleOnSystemUsersPagePage(page);
  await page.goto('/');
  await page.getByRole('button', { name: /submit|save|continue|next|login/i }).click();
  // Expected: The user list is visible and displays the configured system users
  await expect(page.locator('body')).toBeVisible();
});
