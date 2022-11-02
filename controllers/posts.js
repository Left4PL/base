exports.getMainPage = (req, res, next) => {
    res.render('index', {
        pageTitle: 'Main page',
        path: '/'
    });
}