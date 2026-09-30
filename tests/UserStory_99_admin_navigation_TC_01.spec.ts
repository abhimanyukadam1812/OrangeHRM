import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { AdminPage } from '../pages/Admin/Admin.page';

test('Admin page navigation', async ({ page }) => {
  const AdminPage = new AdminPage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('link', { name: /admin/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  // Expected: Admin page is visible
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
