/** Generic fallback locators for the verify status can be enabled page. */
export const verifyStatusCanBeEnabledLocators = {
  page: "main",
  heading: "h1",
  table: "table",
  primaryAction: "button[type="submit"], button:has-text("submit")",
  navigation: "[role="navigation"], nav",
  error: "[role="alert"], .error-message",
} as const;
