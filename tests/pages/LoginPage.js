const { expect } = require('playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('#login-button');
  }
  async goto() {
    await this.page.goto('/');
  }
  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
    await expect(this.page).toHaveURL(/inventory\.html/);
  }
}
module.exports = { LoginPage };
