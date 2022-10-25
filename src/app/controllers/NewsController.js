// Get /news
class NewsController {
    index(req, res) {
        res.render('news')
    }

    //get /news/:slug
    show(req, res) {
        res.send ('trang slug trong news')
    }
}


module.exports = new NewsController