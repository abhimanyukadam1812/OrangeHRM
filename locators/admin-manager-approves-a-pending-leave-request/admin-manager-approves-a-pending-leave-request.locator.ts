/** Generic fallback locators for the admin manager approves a pending leave request page. */
export const adminManagerApprovesAPendingLeaveRequestLocators = {
  page: 'main',
  heading: 'h1',
  table: 'table',
  primaryAction: 'button[type="submit"], button:has-text("submit")',
  navigation: '[role="navigation"], nav',
  error: '[role="alert"], .error-message',
} as const;
