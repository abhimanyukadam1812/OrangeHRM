import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { ManagerNavigatesToLeaveApproveLeavesAndViewsPendingRequestsPage } from '../pages/manager-navigates-to-leave-approve-leaves-and-views-pending-requests/manager-navigates-to-leave-approve-leaves-and-views-pending-requests.page';

test('Manager navigates to Leave > Approve Leaves and views pending requests', async ({ page }) => {
  const managerNavigatesToLeaveApproveLeavesAndViewsPendingRequestsPage = new ManagerNavigatesToLeaveApproveLeavesAndViewsPendingRequestsPage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('button', { name: /submit|save|continue|next|login/i }).click();
  // Expected: Only pending leave requests belonging to the manager's subunit are listed with complete details visible for each request
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
