/** Fallback locators for the user list is visible on system users page page. */
export const userListIsVisibleOnSystemUsersPageLocators = {
  usernameInput: "input[name="username"]",
  passwordInput: "input[name="password"]",
  submitButton: "button[type="submit"]",
  error: "[role="alert"]",
} as const;
