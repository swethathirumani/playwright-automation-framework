class HomePage {
  constructor(page) {
    this.page = page;

    // Navigation Menu
    this.homeMenu = page.locator('nav >> text=Home');
    this.sectorsMenu = page.locator('nav >> text=Sectors');
    this.findLawyerMenu = page.locator('nav >> text=Find Lawyer');
    this.eventsMenu = page.locator('nav >> text=Events');
    this.contactMenu = page.locator('nav >> text=Contact Us');

    // Logo
    this.logo = page.getByRole('link', { name: /go to homepage/i });

    // Breaking News
    this.breakingNewsSection = page.locator('text=Breaking').first();

    // Newsletter
    this.newsletterEmailInput = page.locator('input[type="email"]').first();
    this.newsletterSubscribeButton = page.getByRole('button', { name: /subscribe/i });
  }

  async navigate() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
  }
}

module.exports = HomePage;