const model = require('../model/Texto')

module.exports = {
    delete : async(req, res) => {
        try{
            const {titulo} = req.query
            const resultado = await model.findOneAndDelete({titulo: titulo})
            console.log(resultado)
            return res.status(200).json({message: 'recurso deletado com sucesso'})
        }catch(error){
            console.log(error.message)
            return res.status(500).json({error: 'Erro no servidor!'})
        }
    }
}