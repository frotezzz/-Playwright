const {test, expect} = require('@playwright/test');
const exp = require('constants');

test('Выбор значения из выпадающего списка', async function({page}){

    await page.goto('https://hvalwaters.ru/');
    await page.locator('#express-order-submit').click();
    //await page.waitForTimeout(2000)
    await expect(page).toHaveURL(/cart/);
    /*
    label - указываем текст из выпадающего списка
    value - указываем велью для указанного текста в выпадающем списке
    index - указываем порядковый номер в выпадающем списке, начиная отсчет с 0
    */
    await page.locator('#delivery-time').selectOption({index:5}); //index начинает отсчет с 0, 1, 2 и тд.
    //await page.waitForTimeout(3000);
    /*const value = await page.locator('#delivery-time').textContent();
    console.log('Все значения в выпадающем списке '+value);
    await expect(value.includes('Завтра днем с 13:00 до 18:00')).toBeTruthy(); РАБОЧИЙ КОД*/
    let time=await page.$('#delivery-time')
    let allElements=await time.$$('option')
    let ddStatus=false
    for(let i=0;i<allElements.length; i++)
    {
        let element=allElements[i]
        let value=await element.textContent()
        if(value.includes('Завтра днем с 13:00 до 18:00'))
        {
            ddStatus=true
            break
        }
        console.log('Все значения в выпадающем списке '+value);
    }
    await expect(ddStatus).toBeTruthy();
    
})