/** Fallback locators for the verify filter fields in system users section page. */
export const verifyFilterFieldsInSystemUsersSectionLocators = {
  usernameInput: "input[name="username"]",
  passwordInput: "input[name="password"]",
  submitButton: "button[type="submit"]",
  error: "[role="alert"]",
} as const;
