const express = require('express')
const router = express('router')
const controller = require('../controller/listagem_textos_controller')

router.get("/texto", controller.get)

module.exports = router