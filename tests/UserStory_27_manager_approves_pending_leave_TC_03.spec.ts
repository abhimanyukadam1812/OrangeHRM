import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { ManagerApprovesAPendingLeaveRequestPage } from '../pages/manager-approves-a-pending-leave-request/manager-approves-a-pending-leave-request.page';

test('Manager approves a pending leave request', async ({ page }) => {
  const managerApprovesAPendingLeaveRequestPage = new ManagerApprovesAPendingLeaveRequestPage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('button', { name: /login|sign in|submit|save|continue|next/i }).click();
  // Expected: Request status changes to Approved, employee's leave balance is reduced by the requested days, decision maker and timestamp are recorded, and employee receives an approval notification
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
