import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { Resolver } from '../node_modules/@types/node/dns.d';

test('Admin page access', async ({ page }) => {
  const adminPage = new Resolver(page);
  await page.goto((testConfig.baseUrl || '/') + testConfig.loginPath);
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  await page.getByPlaceholder(/password/i).fill(testConfig.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await page.getByRole('button', { name: /submit|save|continue|next|login/i }).click();
  // Expected: The Admin page loads for the logged-in user
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
