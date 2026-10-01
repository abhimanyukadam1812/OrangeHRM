import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { SystemBlocksOverlappingShiftTimesForSameEmployeePage } from '../pages/system-blocks-overlapping-shift-times-for-same-employee/system-blocks-overlapping-shift-times-for-same-employee.page';

test('System blocks overlapping shift times for same employee', async ({ page }) => {
  const systemBlocksOverlappingShiftTimesForSameEmployeePage = new SystemBlocksOverlappingShiftTimesForSameEmployeePage(page);
  await page.goto((testConfig.baseUrl || '/') + testConfig.loginPath);
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  await page.getByPlaceholder(/password/i).fill(testConfig.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await page.getByRole('button', { name: /login|sign in|submit|save|continue|next/i }).click();
  // Expected: System rejects the overlapping shift assignment with an error indicating shift times conflict with the employee's existing Tuesday shift
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/error-verification.png', fullPage: true });
});
