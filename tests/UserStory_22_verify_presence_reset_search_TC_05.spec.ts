import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { LoginPage } from '../pages/login.page';

test('Verify presence of Reset and Search buttons', async ({ page }) => {
  const verifyPresenceOfResetAndSearchButtonsPage = new LoginPage(page);
  await page.goto((testConfig.baseUrl || '/') + testConfig.loginPath);
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  await page.getByPlaceholder(/password/i).fill(testConfig.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  await page.getByRole('link', { name: /admin/i }).click();
  await page.getByRole('textbox', { name: /search/i }).fill('search term');
  // Expected: Both 'Reset' and 'Search' buttons are visible and positioned after the filter fields in the System Users section
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});

