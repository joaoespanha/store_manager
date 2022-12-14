const express = require('express');
const productControler = require('../controllers/products.controller');
const productsValidations = require('../middlewares/productsValidations');

const router = express.Router();

router.get('/', productControler.findAll);
router.get('/:id', productControler.findById);
router.post('/', productsValidations.validateName, productControler.insert);
router.put('/:id', productsValidations.validateName, productControler.update);
router.delete('/:id', productControler.deleteProduct);

module.exports = router;