var ig = require('instagram-scraping');


function searchtag(tag, callback) {
    ig.scrapeTag(tag).then(result => {
        console.log(result)
        callback(result)
    });
}

function searchdeeptag(tag, callback) {
    ig.deepScrapeTagPage('veranda').then(result => {
        console.log(result);
        callback(result)
    });
}

function searchuser(user, callback) {
    ig.scrapeUserPage(user).then(result => {
        console.log(result);
        callback(result)
    });
}


exports.searchtag = searchtag
exports.searchdeeptag = searchdeeptag
exports.searchuser = searchuser