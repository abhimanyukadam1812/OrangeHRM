import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { LoginPage } from '../pages/login.page';

test('Verify System Users filter section fields', async ({ page }) => {
  const verifySystemUsersFilterSectionFieldsPage = new LoginPage(page);
  await page.goto((testConfig.baseUrl || '/') + testConfig.loginPath);
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  await page.getByPlaceholder(/password/i).fill(testConfig.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  await expect(page).toHaveURL(/\/admin\/viewSystemUsers/);
  await expect(page.getByRole('heading', { name: /system users/i })).toBeVisible();
  await expect(page.getByText('Username', { exact: true })).toBeVisible();
  await expect(page.getByText('User Role', { exact: true })).toBeVisible();
  await expect(page.getByText('Employee Name', { exact: true })).toBeVisible();
  await expect(page.getByText('Status', { exact: true })).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});

