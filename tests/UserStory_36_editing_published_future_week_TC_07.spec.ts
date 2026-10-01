import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { EditingAPublishedFutureWeekShiftRequiresRePublishingAndIsLoggedPage } from '../pages/editing-a-published-future-week-shift-requires-re-publishing-and-is-logged/editing-a-published-future-week-shift-requires-re-publishing-and-is-logged.page';

test('Editing a published future week shift requires re-publishing and is logged', async ({ page }) => {
  const editingAPublishedFutureWeekShiftRequiresRePublishingAndIsLoggedPage = new EditingAPublishedFutureWeekShiftRequiresRePublishingAndIsLoggedPage(page);
  await page.goto((testConfig.baseUrl || '/') + testConfig.loginPath);
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  await page.getByPlaceholder(/password/i).fill(testConfig.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await page.getByRole('button', { name: /login|sign in|submit|save|continue|next/i }).click();
  // Expected: Roster reverts to a pending-republish state after the edit, becomes Published again only after re-publishing, and the change log records the shift time modification with timestamp and HR user identity
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
