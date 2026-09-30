/** Generic fallback locators for the manager rejects a leave request with a comment page. */
export const managerRejectsALeaveRequestWithACommentLocators = {
  page: 'main',
  heading: 'h1',
  table: 'table',
  primaryAction: 'button[type="submit"], button:has-text("submit")',
  navigation: '[role="navigation"], nav',
  error: '[role="alert"], .error-message',
} as const;
