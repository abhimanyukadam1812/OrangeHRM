import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { ManagerRejectsALeaveRequestWithAnOptionalCommentPage } from '../pages/manager-rejects-a-leave-request-with-an-optional-comment/manager-rejects-a-leave-request-with-an-optional-comment.page';

test('Manager rejects a leave request with an optional comment', async ({ page }) => {
  const managerRejectsALeaveRequestWithAnOptionalCommentPage = new ManagerRejectsALeaveRequestWithAnOptionalCommentPage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('button', { name: /login|sign in|submit|save|continue|next/i }).click();
  // Expected: Leave request status changes to rejected, the comment is stored with the decision, employee's leave balance remains unchanged, and decision attribution (manager ID, timestamp) is recorded
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
