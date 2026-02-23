const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test.describe('Homepage Automation Tests', () => {

  test('Verify homepage loads successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();

    await expect(page).toHaveURL('https://thelawreporters.com/');
    await expect(page).toHaveTitle(/Legal News Today/i);
  });

  test('Validate navigation menu items are visible', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();

    await expect(homePage.homeMenu).toBeVisible();
    await expect(homePage.sectorsMenu).toBeVisible();
    await expect(homePage.findLawyerMenu).toBeVisible();
    await expect(homePage.eventsMenu).toBeVisible();
    await expect(homePage.contactMenu).toBeVisible();
  });

  test('Verify logo is displayed and clickable', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();

    await expect(homePage.logo).toBeVisible();
    await homePage.logo.click();
    await expect(page).toHaveURL(/./);
  });

  test('Verify Breaking News section is present', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();

    await expect(homePage.breakingNewsSection).toBeVisible();
  });

  test('Verify newsletter form elements are visible', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();

    await expect(homePage.newsletterEmailInput).toBeVisible();
    await expect(homePage.newsletterSubscribeButton).toBeVisible();
  });

});