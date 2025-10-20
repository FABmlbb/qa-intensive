// tests/pages/CartPage.js
const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.items = page.locator('.cart_item');
    this.removeBackpack = page.locator('[data-test="remove-sauce-labs-backpack"]');
  }

  async open() {
    await this.page.locator('.shopping_cart_link').click();
    await expect(this.page).toHaveURL(/cart\.html/);
  }

  async expectCount(n) {
    await expect(this.items).toHaveCount(n);
  }

  async removeBackpackItem() {
    await this.removeBackpack.click();
  }
}
module.exports = { CartPage };
