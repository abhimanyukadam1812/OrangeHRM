import { type Page } from '@playwright/test';

export class ApproveLeavesPageShowsNoRequestsWhenSubunitHasNonePendingPage {
  constructor(private page: Page) {}

  readonly url = '';

  readonly submitButton = this.page.getByRole('button', { name: /submit|save|continue|next|login/i });

  async goto() {
    await this.page.goto(this.url);
  }
}
