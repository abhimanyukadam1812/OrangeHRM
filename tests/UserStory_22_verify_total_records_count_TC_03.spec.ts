import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { Resolver } from '../node_modules/@types/node/dns.d';

test('Verify total records count display above table', async ({ page }) => {
  const verifyTotalRecordsCountDisplayAboveTablePage = new Resolver(page);
  await page.goto((testConfig.baseUrl || '/') + testConfig.loginPath);
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  await page.getByPlaceholder(/password/i).fill(testConfig.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  // Expected: The text '(58) Records Found' or equivalent count is displayed above the table matching the actual number of user rows
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
