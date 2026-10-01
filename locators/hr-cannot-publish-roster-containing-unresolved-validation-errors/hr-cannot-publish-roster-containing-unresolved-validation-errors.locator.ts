/** Generic fallback locators for the hr cannot publish roster containing unresolved validation errors page. */
export const hrCannotPublishRosterContainingUnresolvedValidationErrorsLocators = {
  page: 'main',
  heading: 'h1',
  table: 'table',
  primaryAction: 'button[type="submit"], button:has-text("submit")',
  navigation: '[role="navigation"], nav',
  error: '[role="alert"], .error-message',
} as const;
