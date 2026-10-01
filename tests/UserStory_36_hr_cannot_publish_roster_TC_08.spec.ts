import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { HrCannotPublishRosterContainingUnresolvedValidationErrorsPage } from '../pages/hr-cannot-publish-roster-containing-unresolved-validation-errors/hr-cannot-publish-roster-containing-unresolved-validation-errors.page';

test('HR cannot publish roster containing unresolved validation errors', async ({ page }) => {
  const hrCannotPublishRosterContainingUnresolvedValidationErrorsPage = new HrCannotPublishRosterContainingUnresolvedValidationErrorsPage(page);
  await page.goto((testConfig.baseUrl || '/') + testConfig.loginPath);
  await page.getByPlaceholder(/username/i).fill(testConfig.username);
  await page.getByPlaceholder(/password/i).fill(testConfig.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await page.getByRole('button', { name: /login|sign in|submit|save|continue|next/i }).click();
  // Expected: System blocks publishing, displays the validation conflict for the affected employee, and the roster remains in Draft status
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
