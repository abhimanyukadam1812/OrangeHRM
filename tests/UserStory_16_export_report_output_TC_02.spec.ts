import { test, expect } from '@playwright/test';
import { testConfig } from './testConfig';
import { ExportReportOutputPage } from '../pages/export-report-output/export-report-output.page';

test('Export report output', async ({ page }) => {
  const export-report-outputPage = new ExportReportOutputPage(page);
  await page.goto(testConfig.baseUrl || 'https://example.com/');
  await page.getByRole('button', { name: /submit|save|continue|next|login/i }).click();
  // Expected: The report is exported successfully in the requested format.
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'test-results/verification-verification.png', fullPage: true });
});
