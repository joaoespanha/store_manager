const salesModels = require('../models/sales.model');
const productsModels = require('../models/products.model');

const INVALID_PROD_MESSAGE = 'Product not found';

// you need to add the controller and field validations
const insert = async (sales) => {
  const productsData = sales
    .map(async ({ productId }) => productsModels.findById(productId));
  const productsSearchResult = await Promise.all(productsData);

  const areProductsValid = productsSearchResult.every((item) => item);
  // console.log('pructs validation', areProductsValid);
  
  if (!areProductsValid) return { type: 'NOT_FOUND', message: INVALID_PROD_MESSAGE };

  const saleId = await salesModels.registerSale();

  const result = sales
    .map(async (prod) => salesModels.insertSaleInfo(saleId, prod.productId, prod.quantity));
  
  await Promise.all(result);

  return { type: null, message: { id: saleId, itemsSold: sales } };
};

module.exports = { insert };