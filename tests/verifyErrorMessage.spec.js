const {test, expect} = require ('@playwright/test')

test('Сообщения об ошибке', async function ({page}){

    await page.goto('https://wiki.hvalwaters.ru/login');
    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)
    await page.locator('#email').fill('12345678');
    await page.locator('[name="password"]').fill('qwerty');
    await page.getByRole('button').click();
    const errorMessage = await page.locator('.text-neg.text-small').textContent();
    console.log('Сообщение об ошибке: ' +errorMessage);
    expect(errorMessage.includes('valid')).toBeTruthy();
    expect(errorMessage==='The email must be a valid email address.').toBeTruthy();
})