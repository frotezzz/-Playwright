const {test, expect} = require ('@playwright/test');
const exp = require('constants');

test('Видимость элементов на пути выбора адреса под авторизованным юзером', async function ({page}){

    await page.goto('https://wa2-dev2.hvalwaters.ru/test_api_cart_fjio3we2f2/');
    const btnEnter = page.locator('//button[contains(text(),"Войти")]');
    await btnEnter.click();
    const inputNumber = page.locator('//div[@class="relative form-field"]//input[@value="+7"]');
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
    const selectedAddress = page.locator('//label[@for="3924357"]');
    await expect(selectedAddress).toBeVisible();
    const uncheckedAddress = page.locator('[data-testid="RadioButtonUncheckedIcon"]');
    await expect(uncheckedAddress.first()).toBeVisible();
    const newAddress = page.locator('//div[@class="radio-label flex items-center"]');
    await expect(newAddress).toBeVisible();
    await newAddress.click();
    const fildNewAddress = page.locator('//input[@placeholder="Куда доставить"]');
    await expect(fildNewAddress).toBeVisible();
    await fildNewAddress.click();
    const btnBackSearchAddress = page.locator('[data-testid="closeGeoSuggestList"]');
    await expect(btnBackSearchAddress).toBeVisible(); //не находит 37 и 38 строчку по какой-то причине, теперь находит
    const inputSearchAddress = page.locator('[data-testid="suggestInput"]');
    await expect(inputSearchAddress).toBeVisible();
    /*const btnMapSearchAddress = page.locator('[data-testid="switchToMap"]'); 
    await expect(btnMapSearchAddress).toBeVisible();*/ //убрана кнопка карты на время
    await inputSearchAddress.click();
    await inputSearchAddress.fill('Энергетиков');
    const btnDelete = page.locator('[data-testid="clearSuggestInput"]');
    await expect(btnDelete).toBeVisible();
    
    await page.waitForSelector('[data-testid="suggestAddressItem"]');
    const resultSearchAddress = await page.$$('[data-testid="suggestAddressItem"]')
    for(let i=0;i<resultSearchAddress.length; i++)
    {
        const textAddress = await resultSearchAddress[i].textContent()
        if(textAddress.includes('проспект Энергетиков'))
        {
            console.log(textAddress);
            await resultSearchAddress[i].click();
            break;
        }
    }; 
    
    const btnSaveAdress = page.locator('[data-testid="addressSelectionButton"]');
    await expect(btnSaveAdress).toBeVisible();
    const inputAddAddress = page.locator('[data-testid="deliveryAddress"]');
    await expect(inputAddAddress).toBeVisible();
    const inputFlat = page.locator('[data-testid="addressFlat"]');
    await expect(inputFlat).toBeVisible();
    const inputFloor = page.locator('[data-testid="addressFloor"]');
    await expect(inputFloor).toBeVisible();
    const inputEntrance = page.locator('[data-testid="addressEntrance"]');
    await expect(inputEntrance).toBeVisible();
    const inputIntercom = page.locator('[data-testid="addressIntercom"]');
    await expect(inputIntercom).toBeVisible();
    
    await btnSaveAdress.click();  
    await expect(myAddress).toBeVisible();
})