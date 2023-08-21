import {Page} from '@playwright/test';

import CustomerLoginPage from "./login/customer-login.page";
import CustomerSignUpPage from "./signup/customer-signup.page";

export interface LoginPages {
 customerLoginPage: CustomerLoginPage,
 customerSignUpPage: CustomerSignUpPage,
}

export default (page: Page): LoginPages => ({
 customerLoginPage: new CustomerLoginPage(page),
 customerSignUpPage: new CustomerSignUpPage(page),
});


