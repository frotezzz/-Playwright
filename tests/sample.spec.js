const {test, expect} = require ('@playwright/test') //test - функция для написания теста, expect - функция для написания утверждений

test("My First Test", async function ({page}){
    expect(12).toBe(12)
})

test.skip("My Second Test", async function({page}){
    expect(100).toBe(101)
}) //test.skip позволяется проспускать конкретно этот кейс, если  он не нуждается в тестах

test("My Third Test", async function({page}){
    expect(2.0).toBe(2.0)
})

test("My Fourth Test", async function({page}){
    expect("Андрей Айдушев").toContain("Андрей")
    expect (true).toBeTruthy()
}) //test.only позволяет тестировать конкретно этот кейс, если другие не нуждаются в тестах

test("My Fifth Test", async function({page}){
    expect (false).toBeFalsy()
}) 

test("My Sixth Test", async function({page}){
    expect ("Андрей Айдушев".includes("Айдушев")).toBeTruthy()
}) // Успешный тест, т.к. "Андрей Айдушев" включает в себя "Айдушев", что является правдой