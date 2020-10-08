// Import Modules:
const express = require('express')
const config = require('./server/config')

//initializing MongoDB
require('./database')

const app = config(express())

//Starting the server:
app.listen(app.get('port'), () => {
    console.log(`server running on port ${app.get('port')}`)
 })