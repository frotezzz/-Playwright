const { test, expect } = require("@playwright/test")

test('Handle Frames', async function({page}){

    await page.goto("https://docs.oracle.com/javase/8/docs/api/");
    const iframe = await page.frameLocator('frame[src="overview-frame.html"]');
    await iframe.locator('[href="java/applet/package-frame.html"]').click();
    await page.pause();
})