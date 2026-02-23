export class CookiePage {
  constructor(page) {
    this.page = page;

    // Cookie banner container (using role if available)
    this.cookieModal = page.locator('[aria-label*="cookie"], text=Accept cookies');

    // Buttons using aria-label (more stable)
    this.acceptButton = page.locator('button[aria-label*="Accept"]');
    this.rejectButton = page.locator('button[aria-label*="Reject"]');
  }

  async navigate() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
  }

  async acceptCookies() {
    await this.acceptButton.waitFor({ state: 'visible' });
    await this.acceptButton.click();
  }

  async rejectCookies() {
    await this.rejectButton.waitFor({ state: 'visible' });
    await this.rejectButton.click();
  }
}