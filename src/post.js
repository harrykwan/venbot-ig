const puppeteer = require('puppeteer');



function getlikelist(postid, callback) {
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.instagram.com/p/' + postid);

        // Get the "viewport" of the page, as reported by the page.
        var myresult = await page.evaluate(() => {
            document.getElementsByTagName('article')[0].getElementsByTagName('button')[5].click()
            var tempresult = []
            await window.setTimeout(function (tempresult) {
                var alldiv = document.querySelectorAll('[role="dialog"]')[0].getElementsByTagName('div')
                for (var j = 0; j < alldiv.length; j++) {
                    if (alldiv[j].hasAttribute('aria-labelledby')) {
                        var alla = alldiv[j].getElementsByTagName('a')
                        for (var k = 0; k < alla.length; k++) {
                            if (alla[k].title != '') {
                                // console.log(alla[k].title)
                                tempresult.push(alla[k].title)
                            }
                        }
                    }
                }
            }, 1000, tempresult)

            return tempresult

        });

        await browser.close();
        callback(myresult)
    })();

}


function gethostid(postid, callback) {
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.instagram.com/p/' + postid);

        // Get the "viewport" of the page, as reported by the page.
        var myresult = await page.evaluate(() => {

            return document.getElementsByTagName('header')[0].getElementsByTagName('a')[1].innerText

        });

        await browser.close();
        callback(myresult)
    })();

}

exports.getlikelist = getlikelist
exports.gethostid = this.gethostid