const model = require('../model/Texto')

module.exports = {
    put : async(req, res) => {
        try {
            const {titulo} = req.query
            let resultado = await model.findOneAndUpdate({titulo: titulo}, req.body)
            let resultado_final = await model.find({titulo: resultado.titulo})
            return res.status(200).json({message: 'recurso alterado com sucesso', resultado_final})
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({error: 'Erro no servidor!'})
        }
    }
}