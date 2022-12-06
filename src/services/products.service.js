const productModels = require('../models/products.model');

const findAll = async () => {
  const products = await productModels.findAll();
  return { type: null, message: products };
};

const findById = async (id) => {
  const product = await productModels.findById(id);
  if (product) return { type: null, message: product };
  return { type: 'id_not_found', message: 'Product not found' };
};
module.exports = {
  findAll,
  findById,
};