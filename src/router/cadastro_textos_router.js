const express = require('express')
const router = express('router')
const controller = require('../controller/cadastro_textos_controller')

router.post("/cadastro/texto", controller.post)

module.exports = router