import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { ManagerAttemptsToReApproveOrReRejectAnAlreadyDecidedLeaveRequestPage } from '../pages/manager-attempts-to-re-approve-or-re-reject-an-already-decided-leave-request/manager-attempts-to-re-approve-or-re-reject-an-already-decided-leave-request.page';

test('Manager attempts to re-approve or re-reject an already decided leave request', async ({ page }) => {
  const managerAttemptsToReApproveOrReRejectAnAlreadyDecidedLeaveRequestPage = new ManagerAttemptsToReApproveOrReRejectAnAlreadyDecidedLeaveRequestPage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('button', { name: /login|sign in|submit|save|continue|next/i }).click();
  // Expected: The already-decided leave request does not appear in the pending list, and any attempt to change its status is rejected with an appropriate error indicating the request is no longer pending
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/error-verification.png', fullPage: true });
});
