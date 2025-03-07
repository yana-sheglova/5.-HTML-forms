import puppeteer from 'puppeteer';

describe('Popover', () => {
    let browser;
    let page;

    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        page = await browser.newPage();
    });

    test('should show popover', async () => {
        await page.goto('http://localhost:9000');
        await page.waitForTimeout(2000);

        const btn = await page.$('#popoverBtn');
        await btn.click();

        const popoverVisible = await page.evaluate(() => {
            const popover = document.querySelector('#popover');
            return popover && popover.style.display !== 'none';
        });

        expect(popoverVisible).toBe(true);
    });

    afterAll(async () => {
        if (browser) {
            await browser.close();
        }
    });
})