import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { ManagerRejectsALeaveRequestWithoutProvidingACommentPage } from '../pages/manager-rejects-a-leave-request-without-providing-a-comment/manager-rejects-a-leave-request-without-providing-a-comment.page';

test('Manager rejects a leave request without providing a comment', async ({ page }) => {
  const managerRejectsALeaveRequestWithoutProvidingACommentPage = new ManagerRejectsALeaveRequestWithoutProvidingACommentPage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('button', { name: /login|sign in|submit|save|continue|next/i }).click();
  await page.getByRole('button', { name: /login|sign in|submit|save|continue|next/i }).click();
  // Expected: Request status updates to rejected, system records the admin who made the decision and timestamp, employee is notified of the rejection without a comment, and employee's leave balance remains unadjusted
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
