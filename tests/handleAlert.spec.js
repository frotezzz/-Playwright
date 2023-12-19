const{test, expect}=require('@playwright/test')

test('Получение оповещений(Alert)', async function ({page}){

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on('dialog', async function(d)
    {
        expect(d.type()).toContain("alert")
        expect(d.message()).toContain("I am a JS Alert") 
        await d.accept();
    });
    await page.locator('button[onclick="jsAlert()"]').click();

});

test('Получение подтверждений(Confirm)', async function ({page}){

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on('dialog', async function(dialogWindow)
    {
        expect(dialogWindow.type()).toContain("confirm")
        expect(dialogWindow.message()).toContain("I am a JS Confirm") 
        //await dialogWindow.accept()
        await dialogWindow.dismiss()
    });
    await page.locator('button[onclick="jsConfirm()"]').click();

})

test('Получение ввода(Prompt)', async function ({page}){

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on('dialog', async function(dialogWindow)
    {
        expect(dialogWindow.type()).toContain("prompt")
        expect(dialogWindow.message()).toContain("I am a JS prompt") 
        await dialogWindow.accept("Андрей")
        //await dialogWindow.dismiss()
    });
    await page.locator('button[onclick="jsPrompt()"]').click();
    await page.waitForTimeout(5000)
})