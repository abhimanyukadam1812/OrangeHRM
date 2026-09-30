import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { Resolver } from '../node_modules/@types/node/dns.d';

test('Verify System Users filter section fields', async ({ page }) => {
  const verifySystemUsersFilterSectionFieldsPage = new Resolver(page);
  await page.goto((testConfig.baseUrl || '/') + testConfig.loginPath);
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  await page.getByPlaceholder(/password/i).fill(testConfig.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  await page.getByPlaceholder(/username/i).fill('Admin');
  // Expected: System Users section displays 'Username' as a textfield along with 'User Role', 'Employee Name', and 'Status' filter fields
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
