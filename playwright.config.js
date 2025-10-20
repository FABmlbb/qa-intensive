// playwright.config.js
require('dotenv').config();
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: process.env.CI ? true : false, // в CI = true, локально = false
    launchOptions: { slowMo: process.env.CI ? 0 : 400 },
    baseURL: process.env.BASE_URL,
    trace: 'on',
    video: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  reporter: [['list'], ['allure-playwright', { outputFolder: 'allure-results', detail: true }]],
});
