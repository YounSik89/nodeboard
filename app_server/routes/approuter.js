const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexcontoller')

router.get('/', indexController.indexPageLoader);

module.exports = router;
