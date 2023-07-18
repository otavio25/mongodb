const mongoose = require('mongoose')

mongoose.connect('mongodb://root:example@172.20.0.2:27017/')
mongoose.Promise = global.Promise

module.exports = mongoose