var Article = require('../models/article');

/**
 * HTTP GET /articles
 * Returns: the list of articles
 */
//.sort({date: 'descending'})
exports.findAll = function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    console.info('Retrieving all articles');
    return Article.find({}).populate('user', 'name avatarPath').sort({creationDate: 'descending'}).exec(function(err, articles) {
        if (!err) {
            console.log('articles: ' + JSON.stringify(articles));
            return res.send(articles);
        } else {
            return console.log(err);
        }
    });
};