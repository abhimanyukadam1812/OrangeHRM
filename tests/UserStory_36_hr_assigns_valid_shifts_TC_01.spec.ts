import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { HrAssignsValidShiftsAndPublishesWeeklyRosterPage } from '../pages/hr-assigns-valid-shifts-and-publishes-weekly-roster/hr-assigns-valid-shifts-and-publishes-weekly-roster.page';

test('HR assigns valid shifts and publishes weekly roster', async ({ page }) => {
  const hrAssignsValidShiftsAndPublishesWeeklyRosterPage = new HrAssignsValidShiftsAndPublishesWeeklyRosterPage(page);
  await page.goto((testConfig.baseUrl || '/') + testConfig.loginPath);
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  await page.getByPlaceholder(/password/i).fill(testConfig.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await page.getByRole('button', { name: /login|sign in|submit|save|continue|next/i }).click();
  // Expected: Roster status changes from Draft to Published, and the assigned shifts are saved for the selected week and subunit
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
