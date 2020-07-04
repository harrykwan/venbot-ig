const puppeteer = require('puppeteer');



function follow(userid, callback) {
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.instagram.com/' + userid);

        // Get the "viewport" of the page, as reported by the page.
        await page.evaluate(() => {
            document.getElementsByTagName('main')[0].getElementsByTagName('section')[0].getElementsByTagName('button')[0].click()
        });

        await browser.close();
        callback()
    })();

}

function getfollower(userid, callback) {

}

exports.follow = follow
exports.getfollower = this.getfollower