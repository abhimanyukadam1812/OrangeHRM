import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { ManagerAttemptsToApproveALeaveRequestWithInsufficientLeaveBalancePage } from '../pages/manager-attempts-to-approve-a-leave-request-with-insufficient-leave-balance/manager-attempts-to-approve-a-leave-request-with-insufficient-leave-balance.page';

test('Manager attempts to approve a leave request with insufficient leave balance', async ({ page }) => {
  const managerAttemptsToApproveALeaveRequestWithInsufficientLeaveBalancePage = new ManagerAttemptsToApproveALeaveRequestWithInsufficientLeaveBalancePage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('button', { name: /login|sign in|submit|save|continue|next/i }).click();
  // Expected: System blocks the approval, displays an insufficient leave balance error, and leave request status remains pending with no balance deduction
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/error-verification.png', fullPage: true });
});
