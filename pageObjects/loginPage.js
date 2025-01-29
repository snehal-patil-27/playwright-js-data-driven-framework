// @ts-check
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from a .env file

class LoginPage {

  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('[id="username"]');
    this.passwordInput = page.locator('[id="password"]');
    this.loginButton = page.locator('[type="submit"]');
  }
  
  //Logs into the application using environment variables for credentials.
  async login() {
    await this.page.goto('/');
    await this.emailInput.fill(process.env.EMAIL);
    await this.passwordInput.fill(process.env.PASSWORD);
    await this.loginButton.click();
  }
};

export {LoginPage};