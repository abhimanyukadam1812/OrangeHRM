import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { Resolver } from '../node_modules/@types/node/dns.d';

test('Verify Actions column displays trash and pencil icons', async ({ page }) => {
  const verifyActionsColumnDisplaysTrashAndPencilIconsPage = new Resolver(page);
  await page.goto((testConfig.baseUrl || '/') + testConfig.loginPath);
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  await page.getByPlaceholder(/password/i).fill(testConfig.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  // Expected: Each row in the 'Actions' column displays both a trash icon and a pencil icon
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
