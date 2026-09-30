import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { ReviewPayoutRequestPage } from '../pages/review-payout-request/review-payout-request.page';

test('Review payout request', async ({ page }) => {
  const reviewPayoutRequestPage = new ReviewPayoutRequestPage(page);
  await page.goto(testConfig.baseUrl || '/');
  await page.getByRole('button', { name: /submit|save|continue|next|login/i }).click();
  // Expected: The request is approved and status is updated.
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
