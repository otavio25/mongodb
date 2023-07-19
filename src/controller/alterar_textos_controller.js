const model = require('../model/Texto')

module.exports = {
    put : async(req, res) => {
        try {
            const {titulo} = req.query
            const resultado = await model.findOneAndUpdate({titulo: titulo}, req.body)
            return res.status(200).json({resultado})
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({error: 'Erro no servidor!'})
        }
    }
}