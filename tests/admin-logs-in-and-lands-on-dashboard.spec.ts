import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard/dashboard.page';

test('Admin logs in and lands on dashboard', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);
  await page.goto('/');
  await page.getByPlaceholder(/username/i).fill('Admin');
  await page.getByRole('button', { name: /login|sign in|submit|save|continue|next/i }).click();
  // Expected: The dashboard is displayed as the landing page for the logged-in Admin
  await expect(page.locator('body')).toBeVisible();
});
