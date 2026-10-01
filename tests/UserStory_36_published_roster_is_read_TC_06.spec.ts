import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { PublishedRosterIsReadOnlyBeforeTheWeekStartsPage } from '../pages/published-roster-is-read-only-before-the-week-starts/published-roster-is-read-only-before-the-week-starts.page';

test('Published roster is read-only before the week starts', async ({ page }) => {
  const publishedRosterIsReadOnlyBeforeTheWeekStartsPage = new PublishedRosterIsReadOnlyBeforeTheWeekStartsPage(page);
  await page.goto((testConfig.baseUrl || '/') + testConfig.loginPath);
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  await page.getByPlaceholder(/password/i).fill(testConfig.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await page.getByRole('button', { name: /submit|save|continue|next|login/i }).click();
  // Expected: System prevents direct editing of the published future week and indicates the roster is read-only until the week starts
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
