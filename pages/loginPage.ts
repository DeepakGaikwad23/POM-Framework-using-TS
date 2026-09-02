import {Locator,Page} from '@playwright/test'
export class loginPage
{
    //login,forgot password,login with Gmail etc.

    readonly page:Page;
    readonly loginLink:Locator;
    readonly userNameField:Locator;
    readonly passwordField:Locator;
    readonly loginButton:Locator;

    constructor(pageReceivedFromLoginPage:Page)
    {
       this.page=pageReceivedFromLoginPage;
       this.loginLink=pageReceivedFromLoginPage.locator('//a[@id="login2"]');
       this.userNameField=pageReceivedFromLoginPage.locator('//input[@id="loginusername"]');
       this.passwordField=pageReceivedFromLoginPage.locator('//input[@id="loginpassword"]');
       this.loginButton=pageReceivedFromLoginPage.locator('//button[text()="Log in"]');

    }

    async login(uname:string,passwd:string)
    {
        await this.loginLink.click();
        await this.userNameField.fill(uname);
        await this.passwordField.fill(passwd);

        await this.loginButton.click();

    }

    forgotpassword()
    {

    }
}