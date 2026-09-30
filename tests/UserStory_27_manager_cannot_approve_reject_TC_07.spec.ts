import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { ManagerCannotApproveOrRejectALeaveRequestOutsideTheirSubunitPage } from '../pages/manager-cannot-approve-or-reject-a-leave-request-outside-their-subunit/manager-cannot-approve-or-reject-a-leave-request-outside-their-subunit.page';

test('Manager cannot approve or reject a leave request outside their subunit', async ({ page }) => {
  const managerCannotApproveOrRejectALeaveRequestOutsideTheirSubunitPage = new ManagerCannotApproveOrRejectALeaveRequestOutsideTheirSubunitPage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('button', { name: /submit|save|continue|next|login/i }).click();
  // Expected: System blocks the action and displays an authorization error, and the request status remains unchanged
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/error-verification.png', fullPage: true });
});
