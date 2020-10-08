//Importing modules:
const path = require('path')
const exphbs = require('express-handlebars')
const morgan = require('morgan')
const multer = require('multer')
//Server Config:
module.exports = app => {
    //Settings:
  app.set('port', process.env.PORT || 3000)
  app.set('views', path.join(__dirname, 'views'))
  //handlebars basic config:
  app.engine('hbs', exphbs({
      defaultLayout : 'main',
      partialsDir : path.join(app.get('views'), 'partials'),
      layoutsDir: path.join(app.get('views', 'layouts')),
      extname: '.hbs',
      helpers: require('./helpers')
  }))
  app.set('view engine','.hbs')
  //Middlewares:
  app.use(morgan('dev'))
  app.use(multer({
      dest: path.join(__dirname, '../public/upload/temp')
  }).single())
  //routes:

  //errorhandler:
    return app
    
}