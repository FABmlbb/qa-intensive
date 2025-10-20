const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');
const { CartPage } = require('./pages/CartPage');

test('Логин, добавление и удаление товара в корзине', async ({ page }) => {
  const login = new LoginPage(page);
  const cart = new CartPage(page);

  await login.goto();
  await login.login(process.env.USERNAME, process.env.PASSWORD);

  // добавляем рюкзак
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // открываем корзину и проверяем
  await cart.open();
  await cart.expectCount(1);

  // удаляем и проверяем, что пусто
  await cart.removeBackpackItem();
  await cart.expectCount(0);
});
