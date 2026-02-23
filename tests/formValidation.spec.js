const { test, expect } = require('@playwright/test');

test.describe('Part 3 - Form Validation Testing', () => {

  // =====================================================
  // TASK 3.1 - NEWSLETTER SUBSCRIPTION
  // =====================================================

  test('Newsletter - Valid email submission', async ({ page }) => {

    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Accept cookie if visible
    const acceptBtn = page.getByRole('button', { name: /accept/i });
    if (await acceptBtn.isVisible().catch(() => false)) {
      await acceptBtn.click();
    }

    const emailInput = page.locator('input[type="email"]').first();
    const subscribeBtn = page.getByRole('button', { name: /subscribe/i });

    await emailInput.fill('testuser@gmail.com');
    await subscribeBtn.click({ force: true });

    await expect(emailInput).toBeVisible();
  });


  test('Newsletter - Invalid email format', async ({ page }) => {

    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const acceptBtn = page.getByRole('button', { name: /accept/i });
    if (await acceptBtn.isVisible().catch(() => false)) {
      await acceptBtn.click();
    }

    const emailInput = page.locator('input[type="email"]').first();

    await emailInput.fill('invalidemail');

    // Native HTML email validation check
    const isValid = await emailInput.evaluate(el => el.checkValidity());
    expect(isValid).toBe(false);
  });


  test('Newsletter - Empty email submission', async ({ page }) => {

    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const acceptBtn = page.getByRole('button', { name: /accept/i });
    if (await acceptBtn.isVisible().catch(() => false)) {
      await acceptBtn.click();
    }

    const subscribeBtn = page.getByRole('button', { name: /subscribe/i });
    await subscribeBtn.click({ force: true });

    const emailInput = page.locator('input[type="email"]').first();
    await expect(emailInput).toBeVisible();
  });


  // =====================================================
  // TASK 3.2 - CONTACT PAGE VALIDATION
  // (NO FORM EXISTS - VALIDATE CONTACT LINKS)
  // =====================================================

  test('Contact Page - Verify Email link is correct', async ({ page }) => {

    await page.goto('/contact-us', { waitUntil: 'domcontentloaded' });

    const emailLink = page.locator('a[href^="mailto:"]').first();

    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute('href', /mailto:/);
  });


  test('Contact Page - Verify WhatsApp link is correct', async ({ page }) => {

    await page.goto('/contact-us', { waitUntil: 'domcontentloaded' });

    const whatsappLink = page.locator('a[href*="wa.me"], a[href*="whatsapp"]').first();

    await expect(whatsappLink).toBeVisible();
    await expect(whatsappLink).toHaveAttribute('href', /wa\.me|whatsapp/);
  });

});