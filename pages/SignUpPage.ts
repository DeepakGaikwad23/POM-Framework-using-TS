import {Locator,Page} from '@playwright/test'
export class SignUpPage
{

    //variable declaration
    readonly page:Page;
    readonly signUpLink:Locator;
    readonly usernameTextbox:Locator;
    readonly passwordTextbox:Locator;
    readonly signUpButton:Locator;


    //asssign values
    constructor(pageReceivedFromSignUpTest: Page)
    {
        this.page=pageReceivedFromSignUpTest;
        this.signUpLink=pageReceivedFromSignUpTest.locator('//a[@id="signin2"]');
        this.usernameTextbox=pageReceivedFromSignUpTest.locator('//input[@id="sign-username"]');
        this.passwordTextbox=pageReceivedFromSignUpTest.locator('//input[@id="sign-password"]');
        this.signUpButton=pageReceivedFromSignUpTest.locator('//button[text()="Sign up"]');
    
    }

    //create methods which uses these variables
    async SignUp()
    {
        await this.signUpLink.click();
        await this.usernameTextbox.fill("Deepak0001");
        await this.passwordTextbox.fill("Password0001");
        await this.signUpButton.click();
    } 



}