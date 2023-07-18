const model = require('../model/Texto')

module.exports = {
    get : async(req, res) => {
        try {
            return res.status(200).json({message: 'Busca realizada com sucesso'})
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({error: 'Erro no servidor!'})
        }
    }
}