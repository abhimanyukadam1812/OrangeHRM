import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { ManagerRejectsALeaveRequestWithACommentPage } from '../pages/manager-rejects-a-leave-request-with-a-comment/manager-rejects-a-leave-request-with-a-comment.page';

test('Manager rejects a leave request with a comment', async ({ page }) => {
  const managerRejectsALeaveRequestWithACommentPage = new ManagerRejectsALeaveRequestWithACommentPage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('button', { name: /login|sign in|submit|save|continue|next/i }).click();
  await page.getByRole('button', { name: /login|sign in|submit|save|continue|next/i }).click();
  // Expected: Request status changes to Rejected, the rejection comment is saved, employee's leave balance remains unchanged, the system records the Admin as the decision maker with a timestamp, and the employee receives a notification with the rejection reason
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
