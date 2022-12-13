const express = require('express');

const salesController = require('../controllers/sales.controller');

const { validateProductId,
  validateProductQuantNum, validateProductQuant } = require('../middlewares/salesValidations');

const router = express.Router();

router.post('/', validateProductId,
  validateProductQuant, validateProductQuantNum, salesController.insert);

module.exports = router;