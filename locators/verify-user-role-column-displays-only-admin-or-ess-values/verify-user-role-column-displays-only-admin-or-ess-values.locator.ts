/** Fallback locators for the verify user role column displays only admin or ess values page. */
export const verifyUserRoleColumnDisplaysOnlyAdminOrEssValuesLocators = {
  usernameInput: "input[name="username"]",
  passwordInput: "input[name="password"]",
  submitButton: "button[type="submit"]",
  error: "[role="alert"]",
} as const;
