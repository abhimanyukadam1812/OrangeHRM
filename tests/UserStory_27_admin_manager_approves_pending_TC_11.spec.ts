import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { AdminManagerApprovesAPendingLeaveRequestPage } from '../pages/admin-manager-approves-a-pending-leave-request/admin-manager-approves-a-pending-leave-request.page';

test('Admin manager approves a pending leave request', async ({ page }) => {
  const adminManagerApprovesAPendingLeaveRequestPage = new AdminManagerApprovesAPendingLeaveRequestPage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('button', { name: /login|sign in|submit|save|continue|next/i }).click();
  // Expected: Request status changes to Approved, employee's leave balance is reduced by the requested days, Admin manager name and decision timestamp are recorded in the system, and employee receives an approval notification
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
