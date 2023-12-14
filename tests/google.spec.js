const {test, expect} = require ('@playwright/test') //test - функция для написания теста, expect - функция для написания утверждений

test("Проверить название заголовка", async function ({page}){
    
    await page.goto("https://google.com") //await задает выполнение шагов теста, goto  - переходит на страницу

    const url = await page.url() //задаем константу url 

    console.log("Заголовок это " + url)

    const title = await page.title() //задаем константу заголовка страницы

    console.log("Заголовок это  " + title)

    await expect(page).toHaveTitle("Google") //проверяем, что page называется "Google"
})