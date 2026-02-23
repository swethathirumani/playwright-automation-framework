import { test, expect } from '@playwright/test';
import { CookiePage } from '../pages/CookiePage';

test.describe('Cookie Consent Testing', () => {

  test.beforeEach(async ({ context }) => {
    await context.clearCookies();
  });

  test('Cookie modal appears on first visit', async ({ page }) => {
    const cookiePage = new CookiePage(page);
    await cookiePage.navigate();
    await expect(cookiePage.acceptButton).toBeVisible({ timeout: 10000 });
  });

  test('Accept button works and modal disappears', async ({ page }) => {
    const cookiePage = new CookiePage(page);
    await cookiePage.navigate();

    await cookiePage.acceptCookies();
    await expect(cookiePage.acceptButton).not.toBeVisible();
  });

  test('Reject button works and modal disappears', async ({ page }) => {
    const cookiePage = new CookiePage(page);
    await cookiePage.navigate();

    await cookiePage.rejectCookies();
    await expect(cookiePage.rejectButton).not.toBeVisible();
  });

  test('Modal does not reappear after accepting', async ({ page }) => {
    const cookiePage = new CookiePage(page);
    await cookiePage.navigate();

    await cookiePage.acceptCookies();
    await page.reload();

    await expect(cookiePage.acceptButton).not.toBeVisible();
  });

});