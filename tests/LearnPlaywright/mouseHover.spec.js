const {test, expect} = require('@playwright/test')

test('Наведение Курсора мыши', async function({page}){

    await page.goto('https://hvalwaters.ru/');
    await page.locator('.top-menu-item.menu-hover-sub.menu-with-sub').hover();
    await page.waitForTimeout(3000);
    await page.locator('[href="/catalog/kulery/napolnye/"]').click();
    await page.waitForTimeout(2000);
})