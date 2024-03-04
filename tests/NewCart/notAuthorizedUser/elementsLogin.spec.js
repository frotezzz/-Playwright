const {test, expect} = require ('@playwright/test')

test('Видимость элементов на пути авторизации в новой корзины', async function ({browser}){

    const context = await browser.newContext();
    const pageSite = await context.newPage();
    await pageSite.goto('https://wa2-dev2.hvalwaters.ru/')
    const page = await context.newPage();
    await page.goto('https://wa2-dev2.hvalwaters.ru/mobile_cart');
    const btnEnter = page.locator('//button[contains(text(),"Войти")]');
    await expect(btnEnter).toBeVisible();
    await btnEnter.click();
    const btnBack = page.locator('//button[@class="_nav_3g0dk_31"]');
    await expect(btnBack).toBeVisible();
    const textLogin = page.locator('//div[@class="mt-4 mb-6 font-bold text-2xl"]');
    await expect(textLogin).toBeVisible();
    const inputNumber = page.locator('//div[@class="relative form-field"]//input[@type="tel"]');
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
    const fildCode0 = page.locator('//div[@id="field-0"]'); 
    await expect(fildCode0).toBeVisible();
    const fildCode1 = page.locator('//div[@id="field-1"]');
    await expect(fildCode1).toBeVisible();
    const fildCode2 = page.locator('//div[@id="field-2"]');
    await expect(fildCode2).toBeVisible();
    const fildCode3 = page.locator('//div[@id="field-3"]');
    await expect(fildCode3).toBeVisible();
    const btnRepiatSendCode = page.locator('[data-testid="resendingTimer"]');
    await expect(btnRepiatSendCode).toBeVisible(); 
    await page.locator('//input[@aria-label="verification input"]').fill('1234');
    await page.waitForSelector('//div[@class="flex gap-2.5 items-center cursor-pointer"]');
})