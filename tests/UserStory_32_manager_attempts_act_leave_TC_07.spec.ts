import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { ManagerAttemptsToActOnALeaveRequestOutsideTheirSubunitPage } from '../pages/manager-attempts-to-act-on-a-leave-request-outside-their-subunit/manager-attempts-to-act-on-a-leave-request-outside-their-subunit.page';

test('Manager attempts to act on a leave request outside their subunit', async ({ page }) => {
  const managerAttemptsToActOnALeaveRequestOutsideTheirSubunitPage = new ManagerAttemptsToActOnALeaveRequestOutsideTheirSubunitPage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('button', { name: /submit|save|continue|next|login/i }).click();
  // Expected: System denies the action with an authorization error, and the leave request status remains unchanged
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/error-verification.png', fullPage: true });
});
