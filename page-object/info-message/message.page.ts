import { Locator, Page } from "@playwright/test";
import MainPage from "../main-page";

class MessagePage extends MainPage{
    errorMessageTextField: Locator;
    successMessageTextField: Locator;

    constructor(page:Page) {
        super(page);
        this.errorMessageTextField = this.page.locator('p.error');
        this.successMessageTextField = this.page.locator('#rightPanel p');
    }

    async error() {
      return this.errorMessageTextField.textContent();
    }

    async success() {
      return this.successMessageTextField.textContent();
    }
}

export default MessagePage;