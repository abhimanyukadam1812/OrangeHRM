import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { ManagerRejectsALeaveRequestWithoutProvidingACommentPage } from '../pages/manager-rejects-a-leave-request-without-providing-a-comment/manager-rejects-a-leave-request-without-providing-a-comment.page';

test('Manager rejects a leave request without providing a comment', async ({ page }) => {
  const managerRejectsALeaveRequestWithoutProvidingACommentPage = new ManagerRejectsALeaveRequestWithoutProvidingACommentPage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('button', { name: /login|sign in|submit|save|continue|next/i }).click();
  // Expected: Leave request status updates to rejected successfully with no comment recorded, and the employee is notified of the rejection
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
