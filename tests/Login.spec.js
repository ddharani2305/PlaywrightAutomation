const {test, expect} = require('@playwright/test');
test('HomePage',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.title();
    await expect(page).toHaveTitle('Automation Testing Practice');
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')
    await page.close();



}

)
