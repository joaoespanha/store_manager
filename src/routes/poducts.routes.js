const express = require('express');
const productControler = require('../controllers/products.controller');

const router = express.Router();

router.get('/', productControler.findAll);
router.get('/:id', productControler.findById);

module.exports = router;