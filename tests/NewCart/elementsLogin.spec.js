const {test, expect} = require ('@playwright/test')

test('Видимость элементов на пути авторизации в новой корзины', async function ({page}){

    await page.goto('https://wa2-dev2.hvalwaters.ru/test_card/index.html');
    const btnEnter = page.locator('//button[contains(text(),"Войти")]');
    await expect(btnEnter).toBeVisible();
    await page.locator('//button[contains(text(),"Войти")]').click();
    const btnBack = page.locator('//*[name()="path" and contains(@d,"M9.0668 0.")]');
    await expect(btnBack).toBeVisible();
    const textLogin = page.locator('//div[@class="mt-4 mb-6 font-bold text-2xl"]');
    await expect(textLogin).toBeVisible();
    const inputNumber = page.locator('(//input[@placeholder="+7"])[2]');
    await expect(inputNumber).toBeVisible();
    await inputNumber.fill('5551234567');
    const btnEnterInProfile = page.locator('//button[contains(text(),"Войти в профиль")]');
    await expect(btnEnterInProfile).toBeVisible();
    await btnEnterInProfile.click();
    await expect(btnBack).toBeVisible();
    const titleWaitCode = page.locator('//div[@class="mt-4 mb-6 font-bold text-2xl"]');
    await expect(titleWaitCode).toBeVisible();
    const discriptionWaitCode = page.locator('//body/div[@role="presentation"]/div[@class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation16 MuiDrawer-paper MuiDrawer-paperAnchorRight css-1ab2xsx"]/div[@class="_container_12wd5_1"]/div[@class="sms-auth"]/div[2]')
    await expect(discriptionWaitCode).toBeVisible();
    //ниже пытался все эти поля задать одной константой и проверять наличие полей в <input aria-label="verification input" spellcheck="false" class="vi" inputmode="numeric" value="" xpath="1"> - не получилось
    const fildCode0 = page.locator('//div[@id="field-0"]'); 
    await expect(fildCode0).toBeVisible();
    const fildCode1 = page.locator('//div[@id="field-1"]');
    await expect(fildCode1).toBeVisible();
    const fildCode2 = page.locator('//div[@id="field-2"]');
    await expect(fildCode2).toBeVisible();
    const fildCode3 = page.locator('//div[@id="field-3"]');
    await expect(fildCode3).toBeVisible();
    const btnRepiatSendCode = page.locator('.block mx-auto disabled:text-[#6A6A6A].underline text-red');
    await expect(btnRepiatSendCode).toBeVisible(); // 33 и 34 строка не работают, скорее всего из-за счетчика - разобраться



    //(await page.waitForSelector('//button[contains(text(),"Войти")]')).isVisible(); Ненадежный вариант проверки видимоти элемента
    //(await page.waitForSelector('//div[@class="mt-4 mb-6 font-bold text-2xl"]')).isVisible(); Ненадежный вариант проверки видимоти элемента
    //(await page.waitForSelector('//*[name()="path" and contains(@d,"M9.0668 0.")]')).isVisible(); Ненадежный вариант проверки видимоти элемента
    
    
   
})