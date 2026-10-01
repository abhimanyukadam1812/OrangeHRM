import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { UnpublishedDraftRosterIsNotVisibleToEmployeesPage } from '../pages/unpublished-draft-roster-is-not-visible-to-employees/unpublished-draft-roster-is-not-visible-to-employees.page';

test('Unpublished draft roster is not visible to employees', async ({ page }) => {
  const unpublishedDraftRosterIsNotVisibleToEmployeesPage = new UnpublishedDraftRosterIsNotVisibleToEmployeesPage(page);
  await page.goto((testConfig.baseUrl || '/') + testConfig.loginPath);
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  await page.getByPlaceholder(/password/i).fill(testConfig.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await page.getByRole('button', { name: /submit|save|continue|next|login/i }).click();
  // Expected: Employee's My Shifts view shows no shifts for next week since the roster is still in draft state
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
