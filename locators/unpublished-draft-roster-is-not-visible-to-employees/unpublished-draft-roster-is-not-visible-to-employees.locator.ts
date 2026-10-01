/** Generic fallback locators for the unpublished draft roster is not visible to employees page. */
export const unpublishedDraftRosterIsNotVisibleToEmployeesLocators = {
  page: 'main',
  heading: 'h1',
  table: 'table',
  primaryAction: 'button[type="submit"], button:has-text("submit")',
  navigation: '[role="navigation"], nav',
  error: '[role="alert"], .error-message',
} as const;
