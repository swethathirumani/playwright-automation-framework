const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test.describe('Navigation Tests', () => {

  test('Verify Events navigation works', async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.navigate();

    await homePage.eventsMenu.click();

    await expect(page).toHaveURL(/.*events/);

    // Check page heading (adjust if needed)
    await expect(page.locator('h1')).toBeVisible();

  });

  test('Verify Contact Us navigation works', async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.navigate();

    await homePage.contactMenu.click();

    await expect(page).toHaveURL(/.*contact/);

    // Match actual heading text
    await expect(page.locator('h1'))
      .toContainText('Get in touch with us');

  });

});