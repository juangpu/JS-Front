var express = require('express');
var router = express.Router();
const contatoController = require('../controllers/contatoController')

router.get('/', contatoController.index);
router.get('/cadastro', contatoController.cadastro)

module.exports = router;