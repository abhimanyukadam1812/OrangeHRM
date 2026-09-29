/** Generic fallback locators for the verify records found count displayed above table page. */
export const verifyRecordsFoundCountDisplayedAboveTableLocators = {
  page: "main",
  heading: "h1",
  table: "table",
  primaryAction: "button[type="submit"], button:has-text("submit")",
  navigation: "[role="navigation"], nav",
  error: "[role="alert"], .error-message",
} as const;
