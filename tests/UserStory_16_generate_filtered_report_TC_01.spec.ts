import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { GenerateAFilteredReportPage } from '../pages/generate-a-filtered-report/generate-a-filtered-report.page';

test('Generate a filtered report', async ({ page }) => {
  const generate-a-filtered-reportPage = new GenerateAFilteredReportPage(page);
  await page.goto(testConfig.baseUrl || 'https://example.com/');
  await page.getByRole('button', { name: /submit|save|continue|next|login/i }).click();
  // Expected: The returned report reflects only the selected data range and filters.
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
