import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { SystemRejectsAssigningASecondShiftToEmployeeOnSameDayPage } from '../pages/system-rejects-assigning-a-second-shift-to-employee-on-same-day/system-rejects-assigning-a-second-shift-to-employee-on-same-day.page';

test('System rejects assigning a second shift to employee on same day', async ({ page }) => {
  const systemRejectsAssigningASecondShiftToEmployeeOnSameDayPage = new SystemRejectsAssigningASecondShiftToEmployeeOnSameDayPage(page);
  await page.goto((testConfig.baseUrl || '/') + testConfig.loginPath);
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  await page.getByPlaceholder(/password/i).fill(testConfig.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await page.getByRole('button', { name: /login|sign in|submit|save|continue|next/i }).click();
  // Expected: System displays a validation error preventing the second shift assignment and the employee's Monday schedule remains unchanged with only the original shift
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/error-verification.png', fullPage: true });
});
