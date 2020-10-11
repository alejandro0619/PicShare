// ! Database connect settings:
const mongoose = require('mongoose');
const { database } = require('./keys');
// ! Create the connection:
mongoose.connect(database.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db =>{ console.log('db is connected') })
    .catch(err =>{ console.error(err) })