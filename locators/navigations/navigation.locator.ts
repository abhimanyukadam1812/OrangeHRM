/** Generic fallback locators for the navigation page. */
export const navigationLocators = {
  page: "main",
  heading: "h1",
  table: "table",
  primaryAction: "button[type="submit"], button:has-text("submit")",
  navigation: "[role="navigation"], nav",
  error: "[role="alert"], .error-message",
} as const;
