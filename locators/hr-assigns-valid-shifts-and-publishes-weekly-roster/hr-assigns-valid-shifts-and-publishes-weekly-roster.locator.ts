/** Generic fallback locators for the hr assigns valid shifts and publishes weekly roster page. */
export const hrAssignsValidShiftsAndPublishesWeeklyRosterLocators = {
  page: 'main',
  heading: 'h1',
  table: 'table',
  primaryAction: 'button[type="submit"], button:has-text("submit")',
  navigation: '[role="navigation"], nav',
  error: '[role="alert"], .error-message',
} as const;
