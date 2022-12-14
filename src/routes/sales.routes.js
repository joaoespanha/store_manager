const express = require('express');

const salesController = require('../controllers/sales.controller');

const { validateProductId,
  validateProductQuantNum, validateProductQuant } = require('../middlewares/salesValidations');

const router = express.Router();

router.post('/', validateProductId,
  validateProductQuant, validateProductQuantNum, salesController.insert);

router.get('/', salesController.getAll);

router.get('/:id', salesController.findById);

router.delete('/:id', salesController.deleteSale);

module.exports = router;