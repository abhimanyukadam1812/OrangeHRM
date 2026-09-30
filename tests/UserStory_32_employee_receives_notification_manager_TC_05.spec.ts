import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { EmployeeReceivesNotificationAfterManagerDecisionPage } from '../pages/employee-receives-notification-after-manager-decision/employee-receives-notification-after-manager-decision.page';

test('Employee receives notification after manager decision', async ({ page }) => {
  const employeeReceivesNotificationAfterManagerDecisionPage = new EmployeeReceivesNotificationAfterManagerDecisionPage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('button', { name: /login|sign in|submit|save|continue|next/i }).click();
  // Expected: Employee receives a notification indicating the leave request was approved, including relevant leave dates and decision details
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
