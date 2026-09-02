import {Locator,Page} from '@playwright/test'
export class ProductPage
{
    //variable declaration
    readonly addToCartButton:Locator;
    readonly productTitle:Locator;
    readonly productPrice:Locator;

    constructor(pageReceivedFromProductPageTest:Page)
    {
        this.addToCartButton=pageReceivedFromProductPageTest.locator('a.btn-success',{ hasText: 'Add to cart' });
        this.productTitle=pageReceivedFromProductPageTest.locator('.name');
        this.productPrice=pageReceivedFromProductPageTest.locator('h3.price-container');
    }

    async addToCart()
    {
        await this.addToCartButton.click();
    }

    async getProductTitle():Promise<string>
    {
        return await this.productTitle.textContent() ?? '';
    }

    async getProductPrice():Promise<string>
    {
        return await this.productPrice.textContent()?? '';
    }
}