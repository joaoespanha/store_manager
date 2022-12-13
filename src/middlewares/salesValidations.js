const noProductIdRes = { message: '"productId" is required' };
const noProductQuantRes = { message: '"quantity" is required' };
const invalidProductQuantRes = { message: '"quantity" must be greater than or equal to 1' };

const HTTP_ERROR_400 = 400; 
const HTTP_ERROR_422 = 422;
const validateProductId = (req, res, next) => {
  const salesArry = req.body;
  const areValid = salesArry.every(({ productId }) => productId);
  // console.log('productId:', areValid);

  if (!areValid) return res.status(HTTP_ERROR_400).json(noProductIdRes);

  return next();
};

const validateProductQuant = (req, res, next) => {
  const salesArry = req.body;
  const areInvalid = salesArry.some(({ quantity }) => quantity === undefined);
  // console.log('Quantity');

  if (areInvalid) return res.status(HTTP_ERROR_400).json(noProductQuantRes);

  return next();
};

const validateProductQuantNum = (req, res, next) => {
  const salesArry = req.body;

  const areValid = salesArry.every(({ quantity }) => quantity > 0);
  // console.log('QuantityNum', areValid);

  if (!areValid) return res.status(HTTP_ERROR_422).json(invalidProductQuantRes);

  return next();
};

module.exports = { validateProductId, validateProductQuant, validateProductQuantNum };