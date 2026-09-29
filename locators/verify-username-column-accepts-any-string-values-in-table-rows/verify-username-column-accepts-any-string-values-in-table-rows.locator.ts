/** Fallback locators for the verify username column accepts any string values in table rows page. */
export const verifyUsernameColumnAcceptsAnyStringValuesInTableRowsLocators = {
  usernameInput: "input[name="username"]",
  passwordInput: "input[name="password"]",
  submitButton: "button[type="submit"]",
  error: "[role="alert"]",
} as const;
