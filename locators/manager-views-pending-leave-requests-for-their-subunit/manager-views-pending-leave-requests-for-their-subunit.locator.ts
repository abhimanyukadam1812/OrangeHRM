/** Generic fallback locators for the manager views pending leave requests for their subunit page. */
export const managerViewsPendingLeaveRequestsForTheirSubunitLocators = {
  page: 'main',
  heading: 'h1',
  table: 'table',
  primaryAction: 'button[type="submit"], button:has-text("submit")',
  navigation: '[role="navigation"], nav',
  error: '[role="alert"], .error-message',
} as const;
