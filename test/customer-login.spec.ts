import pageObject from "../page-object";
import { test, expect } from "@playwright/test";

test('As a customer I can login',async ({page}) => {
 const $ = pageObject(page);
 await page.goto('https://parabank.parasoft.com/parabank/index.htm');
 await $.customerLoginPage.login('Samuel', 'Password@1');
 await $.messagePage.error(); 
 const displayName = await $.customerLoginPage.
});