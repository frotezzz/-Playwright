const {test,expect} = require('@playwright/test')

test('Обработка автоматических предложений с помощью клавиатуры', async function({page}){

    await page.goto('https://www.google.ru/');
    await page.locator('textarea[name="q"]').fill('хваловские воды');
    await page.waitForSelector('//li[@role="presentation"]')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await page.waitForTimeout(2000)
    await page.keyboard.press('Enter')
    await page.waitForTimeout(2000)
})

test.only('Обработка автоматических предложений с помощью цикла', async function({page}){

    await page.goto('https://www.google.ru/');
    await page.locator('textarea[name="q"]').fill('хваловские воды');
    await page.waitForSelector('//li[@role="presentation"]')
    const elements = await page.$$('//li[@role="presentation"]')
    for(let i=0;i<elements.length; i++)
    {
        const text = await elements[i].textContent()
        if(text.includes('спб'))
        {
            await elements[i].click();
            break;
        }
    }
    await page.waitForTimeout(3000)
})