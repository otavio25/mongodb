const mongoose = require('../database/index')

const TextoSchema = new mongoose.Schema ({
    titulo: {
        type: String,
        require: true,
        unique: true
    },
    texto: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Texto = mongoose.model('Texto', TextoSchema)

module.exports = Texto