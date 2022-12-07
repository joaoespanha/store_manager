const express = require('express');
const productControler = require('../controllers/products.controller');

const router = express.Router();

router.get('/', productControler.findAll);
router.get('/:id', productControler.findById);
router.post('/', productControler.insert);

module.exports = router;