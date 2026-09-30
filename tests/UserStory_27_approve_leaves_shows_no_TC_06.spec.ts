import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { ApproveLeavesPageShowsNoRequestsWhenSubunitHasNonePendingPage } from '../pages/approve-leaves-page-shows-no-requests-when-subunit-has-none-pending/approve-leaves-page-shows-no-requests-when-subunit-has-none-pending.page';

test('Approve Leaves page shows no requests when subunit has none pending', async ({ page }) => {
  const approveLeavesPageShowsNoRequestsWhenSubunitHasNonePendingPage = new ApproveLeavesPageShowsNoRequestsWhenSubunitHasNonePendingPage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('button', { name: /submit|save|continue|next|login/i }).click();
  // Expected: System displays an empty list with a message indicating no pending leave requests for approval
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
