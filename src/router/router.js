const express = require('express')
const router = express('router')
const controller_listagem = require('../controller/listagem_textos_controller')
const controller_cadastro = require('../controller/cadastro_textos_controller')
const controller_alterar = require('../controller/alterar_textos_controller')
const controller_deletar = require('../controller/deletar_textos_controller')

router.get("/texto", controller_listagem.get)
router.post("/cadastro/texto", controller_cadastro.post)
router.put("/altera/texto", controller_alterar.put)
router.delete("/deleta/texto", controller_deletar.delete)

module.exports = router