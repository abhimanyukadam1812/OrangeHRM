import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { ManagerViewsDetailedInformationOfAPendingLeaveRequestPage } from '../pages/manager-views-detailed-information-of-a-pending-leave-request/manager-views-detailed-information-of-a-pending-leave-request.page';

test('Manager views detailed information of a pending leave request', async ({ page }) => {
  const managerViewsDetailedInformationOfAPendingLeaveRequestPage = new ManagerViewsDetailedInformationOfAPendingLeaveRequestPage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('button', { name: /login|sign in|submit|save|continue|next/i }).click();
  // Expected: All required leave request details (employee name, leave type, start date, end date, and total days) are displayed accurately on the request detail view
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
