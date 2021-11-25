const { test } = require('@playwright/test')

test('find wiki otd item 2', async ({ page }) => {
    await page.goto('https://en.wikipedia.org/wiki/Main_Page')
    const otd = await page.locator('id=mp-otd >> :nth-match(li, 2)')
    console.log(await otd.textContent())
})