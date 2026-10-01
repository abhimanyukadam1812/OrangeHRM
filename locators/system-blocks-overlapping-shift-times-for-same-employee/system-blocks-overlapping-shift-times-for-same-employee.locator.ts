/** Generic fallback locators for the system blocks overlapping shift times for same employee page. */
export const systemBlocksOverlappingShiftTimesForSameEmployeeLocators = {
  page: 'main',
  heading: 'h1',
  table: 'table',
  primaryAction: 'button[type="submit"], button:has-text("submit")',
  navigation: '[role="navigation"], nav',
  error: '[role="alert"], .error-message',
} as const;
