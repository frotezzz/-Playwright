const {test, expect} =  require("@playwright/test")

test.skip("Valid Login",async function({page}){

    await  page.goto('https://hvalwaters.ru/login/');

    //const form = await page.$('#formAuthLogin');

    const form = await page.$('#identity.form-control');

    //await page.getByPlaceholder("Email или телефон").type ("75559876543")
    
    //await page.locator("Email или телефон").fill ("75559876543")

    //await page.getByTestId("identity").click()
    
    await form.fill(/*'[name="identity"]',*/ '75559876543');

    //await page.getByPlaceholder("Пароль").type("123qwe")

    const form2 = await page.$('#password.form-control');

    await form2.fill(/*'[name="password"]',*/ '123qwe');

    //await page.locator("Пароль").fill("123qwe")

    await  page.locator ("//button[@type='submit']").click()

    //await form.submit();

    await page.waitForTimeout(5000);

    await expect(page).toHaveURL(/home/); 
});

test("Valid Login2", async function({page}){

    await  page.goto('https://wiki.hvalwaters.ru/login');

    /*const form = await page.$('#email');
    await form.fill('qwerty');
    const form2 = await page.$('#password');
    await form2.fill('12345');
    await page.waitForTimeout(5000)*/

    await page.locator('#email').fill('12345678');
    await page.locator('[name="password"]').fill('qwerty');
    await page.waitForTimeout(2000);
    //await page.getByText('Log In').click();
    await page.getByRole('button').click();
    await page.waitForTimeout(5000);

});

test.skip("Valid Login3",async function({page}){

    await  page.goto('https://yc.erp.wand.am/auth/login/');

    //await page.locator('#:r0:-label').click()
    await page.getByLabel('Телефон').fill('79185434885',{timeout:2000});
    await page.getByLabel('Пароль').fill('BhrWfmhDNf',{timeout:1000});
    //await page.waitForTimeout(5000);
    await page.getByText('Войти').click();
    //await page.waitForTimeout(5000);
    await expect(page).toHaveURL(/erp/);
    await page.locator('.ml-3.cursor-pointer').click();
    //await page.getByRole('menuitem').click();
    await page.getByText('Выйти').click();
    //await page.waitForTimeout(5000);
    await expect(page).toHaveURL(/login/)
    /*const element = await page.$('MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault bg-gradient-to-b uppercase w-[40px] h-[40px] from-blueGray-dark to-blueGray-dark text-white css-13qj7nx');
    await element.click();*/ //Вернуться позже к этому
    //await page.getByAltText('ml-auto flex items-center').click()
    //await page.getByText('А').click()

    /*const form = await page.$('#:r0:.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.css-1o6z5ng');
    
    await form.fill('79185434885');

    const form2 = await page.$('#:r1:.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.MuiInputBase-inputAdornedEnd.css-b52kj1');

    await form2.fill('BhrWfmhDNf');

    await  page.locator ("//button[@type='submit']").click()

    await page.waitForTimeout(5000);

    await expect(page).toHaveURL(/erp/);*/ 
});

test.skip("Valid Login4",async function({page}){

    await  page.goto('http://perfectmind.ru/hw/form.php');
    await page.locator('#rowOne').fill("Some value");
    await page.locator('input[name="row-two"]').fill("22Some value22");
    await page.locator('[name="row-three"]').fill("21242334");
    await page.getByText('Отправить').click();
    //await page.locator('#btn').click();
    await page.waitForTimeout(5000);

});