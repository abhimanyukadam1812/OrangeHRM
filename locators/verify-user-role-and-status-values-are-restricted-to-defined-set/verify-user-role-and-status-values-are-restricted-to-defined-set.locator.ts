/** Fallback locators for the verify user role and status values are restricted to defined set page. */
export const verifyUserRoleAndStatusValuesAreRestrictedToDefinedSetLocators = {
  usernameInput: "input[name="username"]",
  passwordInput: "input[name="password"]",
  submitButton: "button[type="submit"]",
  error: "[role="alert"]",
} as const;
