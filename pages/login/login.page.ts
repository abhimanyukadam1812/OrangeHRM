import { type Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  readonly url = 'https://opensource-demo.orangehrmlive.com/';

  readonly usernameInput = this.page.getByLabel(/username/i);
  readonly passwordInput = this.page.getByLabel(/password/i);
  readonly submitButton = this.page.getByRole('button', { name: /login|sign in/i });

  async goto() {
    await this.page.goto(this.url);
  }
}
