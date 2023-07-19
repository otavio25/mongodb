const model = require('../model/Texto')

module.exports = {
    get : async(req, res) => {
        try {
            const {titulo} = req.query
            const resultado = await model.find({titulo: titulo})
            if(resultado.length === 0 || !resultado){
                res.status(404).json({message: 'recurso não encontrado'})
            }
            else{
                return res.status(200).json({resultado})
            }
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({error: 'Erro no servidor!'})
        }
    },

    get_listagem_completa : async(req, res) => {
        try{
            const resultado = await model.find()
            if(resultado.length === 0 || !resultado){
                res.status(404).json({message: 'recurso não encontrado'})
            }
            else{
                return res.status(200).json({resultado})
            }
        }catch(error){
            console.log(error.message)
            return res.status(500).json({error: 'Erro no servidor!'})
        }
    }
}