/** Generic fallback locators for the verify actions column displays trash and pencil icons page. */
export const verifyActionsColumnDisplaysTrashAndPencilIconsLocators = {
  page: "main",
  heading: "h1",
  table: "table",
  primaryAction: "button[type="submit"], button:has-text("submit")",
  navigation: "[role="navigation"], nav",
  error: "[role="alert"], .error-message",
} as const;
