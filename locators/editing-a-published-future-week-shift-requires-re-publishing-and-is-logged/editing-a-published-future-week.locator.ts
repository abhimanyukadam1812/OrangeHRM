/** Generic fallback locators for the editing a published future week page. */
export const editingAPublishedFutureWeekLocators = {
  page: 'main',
  heading: 'h1',
  table: 'table',
  primaryAction: 'button[type="submit"], button:has-text("submit")',
  navigation: '[role="navigation"], nav',
  error: '[role="alert"], .error-message',
} as const;
