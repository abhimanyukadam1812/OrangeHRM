import { type Page } from '@playwright/test';

export class AdminSideNavPage {
  constructor(private page: Page) {}

  readonly baseUrl = '' || '/';

  readonly sideNav = this.page.getByRole('navigation');

  async openMenu(menuName: string) {
    await this.page.getByRole('link', { name: new RegExp(menuName, 'i') }).click();
  }

  async goTo(pageName: string) {
    await this.openMenu(pageName);
  }

  async gotoAdmin() {
    await this.page.getByRole('link', { name: new RegExp('Admin', 'i') }).click();
  }

  async goto() {
    await this.page.goto(this.baseUrl);
  }
}
