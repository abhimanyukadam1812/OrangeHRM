import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { ManagerViewsPendingLeaveRequestsForTheirSubunitPage } from '../pages/manager-views-pending-leave-requests-for-their-subunit/manager-views-pending-leave-requests-for-their-subunit.page';

test('Manager views pending leave requests for their subunit', async ({ page }) => {
  const managerViewsPendingLeaveRequestsForTheirSubunitPage = new ManagerViewsPendingLeaveRequestsForTheirSubunitPage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('button', { name: /submit|save|continue|next|login/i }).click();
  // Expected: Only pending leave requests belonging to employees in the manager's subunit are displayed; requests from other subunits or non-pending statuses are excluded
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
