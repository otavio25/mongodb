const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/api-teste', {useMongoClient: true})
mongoose.Promise = global.Promise

module.exports = mongoose