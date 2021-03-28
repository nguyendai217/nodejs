const newController = require('./news')
const siteController = require('./site')

function route(app) {
  app.use('/news', newController);
  app.use('/', siteController);
}

module.exports = route;
