/** Fallback locators for the navigation to admin user management page via sidepanel page. */
export const navigationToAdminUserManagementPageViaSidepanelLocators = {
  usernameInput: "input[name="username"]",
  passwordInput: "input[name="password"]",
  submitButton: "button[type="submit"]",
  error: "[role="alert"]",
} as const;
