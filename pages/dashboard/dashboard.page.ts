import { type Page } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  readonly url = '';

  readonly usernameInput = this.page.getByLabel(/username/i);
  readonly submitButton = this.page.getByRole('button', { name: /login|sign in/i });

  async goto() {
    await this.page.goto(this.url);
  }
}
