const {test, expect} = require('@playwright/test')

test.skip('Взаимодействие с клавиатурой', async function({page}){

    await page.goto('https://www.google.ru/');
    await page.locator('textarea[name="q"]').fill('хваловские воды');
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.press('Backspace')
    await page.waitForTimeout(2000)
    await page.keyboard.press('Control+V')
    await page.keyboard.press('Enter');
})

test('2Взаимодействие с клавиатурой', async function({page}){

    await page.goto('https://www.google.ru/');
    await page.locator('textarea[name="q"]').focus();
    await page.keyboard.type('стартовый пакет за 449р!')
    await page.keyboard.press('ArrowLeft')
    await page.keyboard.down('Shift')
    for(let i=0;i<4;i++)
    {
        await page.keyboard.press('ArrowLeft')
    }
    await page.keyboard.up('Shift')
    await page.keyboard.press('Backspace')
})