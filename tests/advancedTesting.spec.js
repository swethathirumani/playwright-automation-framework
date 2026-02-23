const { test, expect } = require('@playwright/test');

test.describe('Part 4 - Advanced Testing Scenarios', () => {

  // =====================================================
  // TASK 4.1 - RESPONSIVE DESIGN TESTING
  // =====================================================

  test('Desktop View - Layout Verification', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    await expect(page.locator('body')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
  });


  test('Tablet View - Layout Verification', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    await expect(page.locator('body')).toBeVisible();
  });


  test('Mobile View - Layout Verification', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    await expect(page.locator('body')).toBeVisible();
  });


  // =====================================================
  // TASK 4.2 - DYNAMIC CONTENT TESTING
  // =====================================================

  test('Homepage loads article links', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    await page.waitForSelector('a', { timeout: 10000 });

    const links = page.locator('a');
    const count = await links.count();

    expect(count).toBeGreaterThan(5);
  });


  test('First available link is clickable', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    await page.waitForSelector('a', { timeout: 10000 });

    const links = page.locator('a');

    const count = await links.count();
    expect(count).toBeGreaterThan(0);

    const firstLink = links.first();

    await firstLink.scrollIntoViewIfNeeded();
    await expect(firstLink).toBeVisible();

    const href = await firstLink.getAttribute('href');
    expect(href).not.toBeNull();

    await firstLink.click();

    // Just verify page did not crash
    await expect(page.locator('body')).toBeVisible();
  });


  test('Images have valid src attributes', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const src = await images.nth(i).getAttribute('src');
      expect(src).not.toBeNull();
    }
  });

});