import {Locator,Page} from '@playwright/test'
export class CartPage
{
     //variable declaration
    readonly cartItems:Locator;
    readonly placeOrderButton:Locator;

    //asssign values
    constructor(pageReceivedFromCartPageTest:Page)
    {
        this.cartItems=pageReceivedFromCartPageTest.locator('#tbodyid tr');
        this.placeOrderButton=pageReceivedFromCartPageTest.locator('button:has-text("Place Order")');
    }

    async getCartItemCount():Promise<number>
    {
        return await this.cartItems.count();
    }

    async placeOrder()
    {
        await this.placeOrderButton.click();
    }
}