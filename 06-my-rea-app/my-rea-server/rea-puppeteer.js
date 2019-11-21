const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.realestate.com.au/buy/in-hawthorn+east,+vic+3123%3b/list-1');

    // await page.emulateMedia('screen');
    // await page.pdf({path: 'rea.pdf', format: 'A4'});

    await page.waitForSelector('.residential-card__details-link', {timeout: 2000})
        .then(() => console.log('Page loaded'));
    let listing = await page.$$eval('.residential-card__details-link', e => e.map((a) => a.innerText));
    console.log(listing);

    await browser.close();
})();
