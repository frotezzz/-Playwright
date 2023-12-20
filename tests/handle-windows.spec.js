const{test, expect} = require('@playwright/test')

test('Работа с несколькими вкладками', async function({browser}){

    const context=await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://hvalwaters.ru/");
    const [newPage] = await Promise.all
    (
        [
            context.waitForEvent('page'),
            page.locator('.share-list__item.share__item_vkontaktei').click()
        ]
    )
    await newPage.locator('.FlatButton.FlatButton--primary.FlatButton--size-m.redesigned-group-action').click()
})