import { Page, Locator } from '@playwright/test';
import { loginLocators } from '../locators/login.locator';

/**
 * Page object for the OrangeHRM login screen.
 *
 * Wraps the login form with stable locators (see locators/login.locator.ts)
 * and exposes high-level actions + assertions so tests express *intent*
 * ("login with these credentials") instead of raw selectors.
 */
export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly error: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator(loginLocators.usernameInput);
    this.passwordInput = page.locator(loginLocators.passwordInput);
    this.loginButton = page.locator(loginLocators.loginButton);
    this.error = page.locator(loginLocators.error);
  }

  /** Load the login screen (the dashboard URL redirects here when logged out). */
  async goto(): Promise<void> {
    await this.page.goto('/web/index.php/auth/login');
    // The form is a Vue component — wait until the inputs are actually mounted.
    await this.usernameInput.waitFor({ state: 'visible' });
  }

  /** Fill the credentials and submit. */
  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  /** True when the user is signed in (i.e. we navigated away from the login route). */
  async isLoggedIn(): Promise<boolean> {
    const url = this.page.url();
    return !/auth\/login/.test(url);
  }
}
