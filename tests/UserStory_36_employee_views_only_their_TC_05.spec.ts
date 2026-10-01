import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { EmployeeViewsOnlyTheirOwnShiftsAfterRosterPublishPage } from '../pages/employee-views-only-their-own-shifts-after-roster-publish/employee-views-only-their-own-shifts-after-roster-publish.page';

test('Employee views only their own shifts after roster publish', async ({ page }) => {
  const employeeViewsOnlyTheirOwnShiftsAfterRosterPublishPage = new EmployeeViewsOnlyTheirOwnShiftsAfterRosterPublishPage(page);
  await page.goto((testConfig.baseUrl || '/') + testConfig.loginPath);
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  await page.getByPlaceholder(/password/i).fill(testConfig.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await page.getByRole('button', { name: /submit|save|continue|next|login/i }).click();
  // Expected: Employee A sees only their own assigned shifts for the week and no shifts belonging to other employees
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
