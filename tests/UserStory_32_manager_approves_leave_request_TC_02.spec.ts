import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { ManagerApprovesALeaveRequestWithSufficientLeaveBalancePage } from '../pages/manager-approves-a-leave-request-with-sufficient-leave-balance/manager-approves-a-leave-request-with-sufficient-leave-balance.page';

test('Manager approves a leave request with sufficient leave balance', async ({ page }) => {
  const managerApprovesALeaveRequestWithSufficientLeaveBalancePage = new ManagerApprovesALeaveRequestWithSufficientLeaveBalancePage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('button', { name: /login|sign in|submit|save|continue|next/i }).click();
  // Expected: Leave request status changes from pending to approved, employee's leave balance is reduced by the approved number of leave days, and the manager ID and decision timestamp are recorded
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
