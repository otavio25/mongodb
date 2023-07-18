const model = require('../model/Texto')

module.exports = {
    post : async(req, res) => {
        try {
            const resultado = await model.create(req.body)
            return res.status(201).json({resultado})
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({error: 'Erro no servidor!'})
        }
    }
}