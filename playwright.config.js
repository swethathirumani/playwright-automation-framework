// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 1,
  /* Opt out of parallel tests on CI. */
  workers: 4,
  timeout: 60000,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html' , { open: 'never' }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
   baseURL: 'https://thelawreporters.com',
   headless: true,
  actionTimeout: 20000,
  navigationTimeout: 30000,
   screenshot: 'only-on-failure',
   video: 'retain-on-failure',

    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
    name: 'Desktop Chrome',
    use: {
      browserName: 'chromium',
      viewport: { width: 1920, height: 1080 },
    },
  },
  {
    name: 'Firefox',
    use: { browserName: 'firefox' },
  },
  {
    name: 'Webkit',
    use: { browserName: 'webkit' },
  },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

