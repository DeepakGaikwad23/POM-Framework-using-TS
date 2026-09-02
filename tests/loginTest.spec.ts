import {test,expect} from '@playwright/test'
import { loginPage } from '../pages/loginPage';
import data from "../TestData/testData.json";
import { SignUpPage } from '../pages/SignUpPage';
import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage'

test.beforeEach("pre condition",async ({page})=>
{
    await page.goto("https://demoblaze.com/index.html");
})

// test.afterEach("tear down",async ({page}, testInfo)=>
// {
//     if(testInfo.status==="failed")
//     {
//         await page.screenshot(
//             {
//                 path: `Screenshot/${testInfo.title}.png`,
//                 fullPage:true
//             }
//         )
//     }

// })

test("loginTest", async ({page})=>
{
    //await page.goto("https://demoblaze.com/index.html");
    const lpObj = new loginPage(page);
    //await lpObj.login();
    //await lpObj.login("bipin1234","Password_1234");
    await lpObj.login(data.users[0].username,data.users[0].password) ;
    //await lpObj.login(data.users[1].username,data.users[1].password) ;
    //Validation or assertion
    await expect(page.locator('//a[@id="logout2"]')).toHaveText("Log out");
    //perform logout
    await page.locator('//a[@id="logout2"]').click();

    // for (let i of data.users)
    // {
    //     await lpObj.login(i.username,i.password);

    //     //Validation or assertion
    //     await expect(page.locator('//a[@id="logout2"]')).toHaveText("Log out");

    //     //perform logout
    //     await page.locator('//a[@id="logout2"]').click();
    // }


    //Validation or assertion
    //await expect(page.locator('//a[@id="logout2"]')).toHaveText("Log out");

    //perform logout
    //await page.locator('//a[@id="logout2"]').click();

})

test("Sign Up test case", async ({page})=>
{
    //await page.goto("https://demoblaze.com/index.html");
    //await page.locator('//a[@id="signin2"]').click();

    //this is for now a placeholder test , we will paopulate it in a while

    const spObj = new SignUpPage(page);
    await spObj.SignUp();


      // Handle JavaScript alert
      page.once('dialog', async (dialog) => {

      // Confirm popup type
      expect(dialog.type()).toBe('alert');

       // Confirm popup message
      expect(dialog.message()).toBe('Sign up successful.');

      console.log('Popup message:', dialog.message());

       // Click OK
       await dialog.accept();
    })
    

})

test("User can add laptop to cart", async ({page})=>
{
    const lpObj = new loginPage(page);
    await lpObj.login(data.users[0].username,data.users[0].password) ;
    await expect(page.locator('//a[@id="logout2"]')).toHaveText("Log out");


    const homepage = new HomePage(page);
    const productpage = new ProductPage(page);
    const cartpage = new CartPage(page);

    await homepage.selectPhones();
    await page.getByText('Nexus 6', { exact: true }).click();
    
    // page.once('dialog', async dialog =>
    // {
    //     expect(dialog.message()).toContain('Product added');
    //     await dialog.accept();
    // })
    // await productpage.addToCart();
    await Promise.all([
        page.waitForEvent('dialog').then(async dialog => {
            console.log('Dialog:', dialog.message());
            await dialog.accept();
        }),
        productpage.addToCart()
    ]);
    console.log('Selected product:',await productpage.getProductTitle());

    await page.getByRole('link', { name: 'Home (current)' }).click();

    await homepage.selectMonitors();
    await page.getByText('Apple monitor 24', { exact: true }).click();
    // page.once('dialog', async dialog =>
    // {
    //     expect(dialog.message()).toContain('Product added');
    //     await dialog.accept();
    // })
    //await productpage.addToCart();
    await Promise.all([
        page.waitForEvent('dialog').then(async dialog => {
            console.log('Dialog:', dialog.message());
            await dialog.accept();
        }),
        productpage.addToCart()
    ]);
    console.log('Selected product:',await productpage.getProductTitle());

    await page.getByRole('link', { name: 'Home (current)' }).click();

    await homepage.selectLaptops();
    await page.getByText('Dell i7 8gb', { exact: true }).click();
    
    // page.once('dialog', async dialog =>
    // {
    //     expect(dialog.message()).toContain('Product added');
    //     await dialog.accept();
    // })
    // await productpage.addToCart();
    await Promise.all([
        page.waitForEvent('dialog').then(async dialog => {
            console.log('Dialog:', dialog.message());
            await dialog.accept();
        }),
        productpage.addToCart()
    ]);
    console.log('Selected product:',await productpage.getProductTitle());


    //await page.locator('#cartur').click();

    await homepage.openCart();

    await expect(page.locator('#tbodyid')).toBeVisible();

    expect(await cartpage.getCartItemCount()).toBeGreaterThan(0);

    const count = await cartpage.getCartItemCount();

    console.log(count);




})