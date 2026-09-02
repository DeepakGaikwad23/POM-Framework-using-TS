import {Locator,Page} from '@playwright/test'
export class HomePage
{
    //variable declaration
    readonly page:Page;
    readonly signUpLink:Locator;
    readonly loginLink:Locator;
    readonly cartLink:Locator;
    readonly phonesCategory:Locator;
    readonly laptopsCategory:Locator;
    readonly monitorsCategory:Locator;

    //asssign values
    constructor(pageReceivedFromHomePageTest:Page)
    {
        this.page= pageReceivedFromHomePageTest;
        this.loginLink= pageReceivedFromHomePageTest.locator('//a[@id="login2"]');
        this.signUpLink=pageReceivedFromHomePageTest.locator('//a[@id="signin2"]');
        this.cartLink=pageReceivedFromHomePageTest.locator('#cartur');
        this.phonesCategory=pageReceivedFromHomePageTest.locator('a:has-text("Phones")');
        this.laptopsCategory=pageReceivedFromHomePageTest.locator('a:has-text("Laptops")');
        this.monitorsCategory=pageReceivedFromHomePageTest.locator('a:has-text("Monitors")');

    }

    async openCart()
    {
        await this.cartLink.click();
    }

    async selectPhones()
    {
        await this.phonesCategory.click();
    }

    async selectLaptops()
    {
        await this.laptopsCategory.click();
    }

    async selectMonitors()
    {
        await this.monitorsCategory.click();
    }

}