/** Generic fallback locators for the generate a filtered report page. */
export const generateAFilteredReportLocators = {
  page: "main",
  heading: "h1",
  table: "table",
  primaryAction: "button[type="submit"], button:has-text("submit")",
  navigation: "[role="navigation"], nav",
  error: "[role="alert"], .error-message",
} as const;
