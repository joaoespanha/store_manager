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

const getAll = async () => {
  const salesData = await salesModels.getAll();

  return { type: null, message: salesData };
};

const findById = async (id) => {
  const saleData = await salesModels.findById(id);

  if (saleData.length === 0) return { type: 'not_found', message: 'Sale not found' };
  return { type: null, message: saleData };
};

const deleteSale = async (id) => {
  const saleData = await salesModels.findById(id);
  if (saleData.length === 0) return { type: 'not_found', message: 'Sale not found' };

  await salesModels.deleteSale(id);

  return { type: null };
};

module.exports = { insert, getAll, findById, deleteSale };