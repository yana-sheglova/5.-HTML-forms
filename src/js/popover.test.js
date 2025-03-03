import puppeteer from 'puppeteer';

describe('Popover', () => {
    let browser;
    let page;

    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            devtools: true,
        });
        page = await browser.newPage();
    });

    test('should show popover', async () => {
        await page.goto('http://localhost:9000');

        const btn = await page.$('#popoverBtn');
        await btn.click();

        const popoverVisible = await page.evaluate(() => {
            const popover = document.querySelector('#popover');
            return popover && popover.style.display !== 'none';
        });

        expect(popoverVisible).toBe(true);
    });

    afterAll(async () => {
        await browser.close();
    });
})