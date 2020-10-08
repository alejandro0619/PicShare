//Importing modules:
const path = require('path')
const exphbs = require('express-handlebars')
const morgan = require('morgan')
const multer = require('multer')
const express = require('express')
const routes = require('../routes/index')

//Server Config:
module.exports = app => {
   app.set('port', process.env.PORT|| 3000)

   app.set('views', path.join(__dirname, '../views'))

    // handlebars basic config:
   app.engine('.hbs', exphbs({
      defaultLayout: 'main',
      layoutsDir: path.join(app.get('views'), 'layouts'),
      partialsDir: path.join(app.get('views'), 'partials'),
      helpers: require('./helpers'),
      extname: '.hbs'
    })
  )
  //Setting view engine
  app.set('view engine', '.hbs')

  //Middlewares:
  app.use(morgan('dev'))
  app.use(multer({
      dest: path.join(__dirname, '../public/upload/temp')
  }).single('image'))
  app.use(express.urlencoded({
      extended: false
  }))
  app.use(express.json())

  //errorhandler:
    return app
    
}
