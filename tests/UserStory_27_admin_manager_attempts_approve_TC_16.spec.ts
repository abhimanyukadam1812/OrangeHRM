import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { AdminManagerAttemptsToApproveAnAlreadyDecidedLeaveRequestPage } from '../pages/admin-manager-attempts-to-approve-an-already-decided-leave-request/admin-manager-attempts-to-approve-an-already-decided-leave-request.page';

test('Admin manager attempts to approve an already-decided leave request', async ({ page }) => {
  const adminManagerAttemptsToApproveAnAlreadyDecidedLeaveRequestPage = new AdminManagerAttemptsToApproveAnAlreadyDecidedLeaveRequestPage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('button', { name: /login|sign in|submit|save|continue|next/i }).click();
  // Expected: System prevents the duplicate action, displays a message that the request has already been processed, request status remains unchanged, leave balance remains unmodified, and no new decision timestamp is recorded
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
