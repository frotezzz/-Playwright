const {test, expect} = require ('@playwright/test')

test ('Отображение товаров в корзине', async function ({browser}){

    /*const context=await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://wa2-dev2.hvalwaters.ru/');
    await page.locator('[id="express-order-submit"]').click();
    /*const context=await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://wa2-dev2.hvalwaters.ru/');
    const [newPage] = await Promise.all
    (
        [
            context.waitForEvent('page'),
            page.locator('[id="express-order-submit"]').click()
        ]
    );
    await newPage.locator*/
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://wa2-dev2.hvalwaters.ru/');
    await page.locator('[id="express-order-submit"]').click();
    const pageCart = await context.newPage();
    await pageCart.goto('https://wa2-dev2.hvalwaters.ru/test_api_cart_fjio3we2f2/');
    const itemCart = pageCart.locator('[data-testid="productItem"]');
    await expect(itemCart).toBeVisible();
    const btnPlusItem = pageCart.locator('[data-testid="AddRoundedIcon"]');
    await expect(btnPlusItem).toBeVisible();
    await btnPlusItem.click();
    await btnPlusItem.click();
    const btnMinusItem = pageCart.locator('[data-testid="RemoveRoundedIcon"]');
    await expect(btnMinusItem).toBeVisible();
    await btnMinusItem.click();
    const valueItem = pageCart.locator('[value="3"]');
    await expect(valueItem).toBeTruthy();
    const totalAmauntItem = pageCart.locator('._cost_1bkvc_22');
    await pageCart.waitForResponse('https://wa2-dev2.hvalwaters.ru/test_api_cart_fjio3we2f2/cart/item/416/');
    await expect(totalAmauntItem.getByText('990')).toBeVisible(); //почему-то это работает, в трессеровке выводится эта цифра, а при запущенном тесте выводится другая цена
    
    console.log(await expect(totalAmauntItem.getByText('990')).toBeVisible()); //выводится undefined
    
    const deleteItem = pageCart.locator('[data-testid="DeleteOutlineRoundedIcon"]');
    await expect(deleteItem).toBeVisible();
    await deleteItem.click();
    const emptyCart = pageCart.locator('[data-testid="isEmptyCart"]');
    await expect(emptyCart).toBeVisible();
})