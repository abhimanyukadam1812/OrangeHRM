/** Generic fallback locators for the manager attempts to approve an page. */
export const managerAttemptsToApproveAnLocators = {
  page: 'main',
  heading: 'h1',
  table: 'table',
  primaryAction: 'button[type="submit"], button:has-text("submit")',
  navigation: '[role="navigation"], nav',
  error: '[role="alert"], .error-message',
} as const;
