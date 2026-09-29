import { type Page } from '@playwright/test';

export class VerifyUsernameColumnAcceptsAnyStringValuesInTableRowsPage {
  constructor(private page: Page) {}

  readonly url = '';

  readonly usernameInput = this.page.getByLabel(/username/i);

  async goto() {
    await this.page.goto(this.url);
  }
}
