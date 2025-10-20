const { test, expect } = require('@playwright/test');

test('Проверка заголовка страницы', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
