import { Locator,Page } from "@playwright/test";
import MainPage from "../../main-page";

/** customer signup page */
class CustomerSignUpPage extends MainPage {
    firstNameTextField: Locator;
    lastNameTextField: Locator;
    addressTextField: Locator;
    cityTextField: Locator;
    stateTextField: Locator;
    zipCodeTextField: Locator;
    phoneTextField: Locator;
    ssnTextField: Locator;
    usernameTextField: Locator;
    passwordTextField: Locator;
    registerButton: Locator;

  constructor(page: Page){
    super(page);
    this.firstNameTextField = this.page.locator('input[name="customer.firstName"]');
    this.lastNameTextField = this.page.locator('input[name="customer.lastName"]');
    this.addressTextField = this.page.locator('input[name="customer.address.street"]');
    this.cityTextField = this.page.locator('input[name="customer.address.city"]');
    this.stateTextField = this.page.locator('input[name="customer.address.state"]');
    this.zipCodeTextField = this.page.locator('input[name="customer.address.zipCode"]');
    this.phoneTextField = this.page.locator('input[name="customer.phoneNumber"]');
    this.ssnTextField = this.page.locator('input[name="customer.ssn"]');
    this.registerButton = this.page.locator('td input[type="submit"]')
  }
  
  /**
   * customer firstname.
   */
   async setFirstName(firstName: string): Promise<void>{
    await this.firstNameTextField.type(firstName)
   }

   /**
    * customer lastname.
    */
   async setLastName(lastName: string): Promise<void>{
     await this.lastNameTextField.type(lastName);
   }

    /**
     * customer address.
     */
    async setAddress(address: string): Promise<void>{
      await this.addressTextField.type(address)
    }

    /**
     * customer city.
     */
    async setCity(city: string): Promise<void>{
      await this.cityTextField.type(city)
    }
    
    /**
     * customer state.
     */
    async setState(state: string): Promise<void> {
      await this.stateTextField.type(state)
    }

    /** 
     * customer phone number 
     */
    async setPhoneNumber(phone: string): Promise<void>{
      await this.phoneTextField.type(phone);
    }

    /** 
     * customer social security number 
     */
    async setSSN(ssn: string): Promise<void> {
        await this.ssnTextField.type(ssn)
    }
    
    /**
     * submit register form
     */
    async submit(){
        await this.registerButton.click();
    }
}

export default CustomerSignUpPage;