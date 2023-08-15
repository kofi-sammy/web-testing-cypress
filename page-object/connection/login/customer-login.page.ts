import { Locator, Page } from "@playwright/test";
import MainPage from "../../base-page";

class CustomerLoginPage extends MainPage {
    usernameTextField: Locator;
    passwordTextField: Locator;
    submitButton: Locator;
    forgetLoginButton: Locator;
    registerButton: Locator;

    constructor(page: Page){
        super(page);
        this.usernameTextField = this.page.locator('input[name="username"]');
        this.passwordTextField = this.page.locator('input[name="password"]');
        this.submitButton = this.page.locator('.login input[type="submit"]')
        this.forgetLoginButton = this.page.locator('a[href="lookup.htm"]');
        this.registerButton = this.page.locator('a[href="register.htm"]')
    }

    /**
     * Customer username.
     * @param {string} name - username.
     */
    async setUserName(name: string): Promise<void> {
      await this.usernameTextField.type(name);
    }

    /**
     * forget user login info.
     */
    async forgetUserLogin(): Promise<void> {
        await this.forgetLoginButton.click()
    }

    /**
     * set user password 
     * @param {string} password - user password.
     */
    async setUserPassword(password: string): Promise<void> {
      await this.passwordTextField.type(password);
    }

    /** 
     * Go to signup page 
     */
    async goToSignUp(): Promise<void>{
        await this.registerButton.click()
    }

    /**
     * submit form.
     */
    async submit(): Promise<void>{
      await this.submitButton.click()
    }
}

export default CustomerLoginPage;