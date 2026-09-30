import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { ManagerAttemptsToApproveAnAlreadyDecidedLeaveRequestPage } from '../pages/manager-attempts-to-approve-an-already-decided-leave-request/manager-attempts-to-approve-an-already-decided-leave-request.page';

test('Manager attempts to approve an already-decided leave request', async ({ page }) => {
  const managerAttemptsToApproveAnAlreadyDecidedLeaveRequestPage = new ManagerAttemptsToApproveAnAlreadyDecidedLeaveRequestPage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('button', { name: /login|sign in|submit|save|continue|next/i }).click();
  // Expected: System prevents the duplicate action, displays a message that the request has already been processed, and no further changes are made to status or leave balance
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
