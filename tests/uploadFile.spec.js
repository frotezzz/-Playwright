const {test, expect}=require('@playwright/test')

test('Загрузка файлов', async function ({page}){

    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator('#file-upload').setInputFiles('./uploadPW/nt7r8KDM2Q.png');
    await page.waitForTimeout(3000)
    await page.locator('#file-submit').click();
    await page.waitForTimeout(3000)
    expect(await page.locator('//h3')).toHaveText("File Uploaded!")
})