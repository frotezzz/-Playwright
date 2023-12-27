const {test, expect} = require ('@playwright/test')

test('Видимость элементов на пути выбора адреса под авторизованным юзером', async function ({page}){

    await page.goto('https://wa2-dev2.hvalwaters.ru/test_card/index.html');
    const btnEnter = page.locator('//button[contains(text(),"Войти")]');
    await btnEnter.click();
    const inputNumber = page.locator('(//input[@placeholder="+7"])[2]');
    await inputNumber.fill('5551234567');
    const btnEnterInProfile = page.locator('//button[contains(text(),"Войти в профиль")]');
    await btnEnterInProfile.click();
    await page.locator('//input[@aria-label="verification input"]').fill('1234');
    await page.waitForSelector('//div[@class="flex gap-2.5 items-center cursor-pointer"]');

    const fildAddress = page.locator('//div[@class="_content-wrapper_h5705_5"]');
    await expect(fildAddress).toBeVisible();
    const myAddress = page.locator('[data-testid="mainAddress"]');
    await expect(myAddress).toBeVisible();
    await fildAddress.click();
    const btnBack = page.locator('[data-testid="closeAddressList"]');
    await expect(btnBack).toBeVisible;
    const checkedAddress = page.locator('[data-testid="RadioButtonCheckedIcon"]');
    await expect(checkedAddress).toBeVisible;
    const selectedAddress = page.locator('//div[@class="radio-label leading-none"]');
    await expect(selectedAddress).toBeVisible();
    const uncheckedAddress = page.locator('[data-testid="RadioButtonUncheckedIcon"]');
    await expect(uncheckedAddress).toBeVisible();
    const newAddress = page.locator('//div[@class="radio-label flex items-center"]');
    await expect(newAddress).toBeVisible();
    const btnSaveAdress = page.locator('[data-testid="addressSelectionButton"]');
    await expect(btnSaveAdress).toBeVisible();
    await btnSaveAdress.click();
    await expect(myAddress).toBeVisible();
})