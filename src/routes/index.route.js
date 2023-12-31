const newsRouter = require('./news.route');
const siteRouter = require('./site.route');
function route(app) {
    // app.get('/news', (req, res) => {
    //   res.render('news');
    // })
    app.use('/news', newsRouter);
    // app.use('/news', siteRouter);
    app.use('/', siteRouter);
}

module.exports = route;
