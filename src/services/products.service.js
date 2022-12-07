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
const insert = async (name) => {
  const insertId = await productModels.insert(name);
  // console.log(insertId);
  if (insertId) return { type: null, message: { id: insertId, name } };
};
module.exports = {
  findAll,
  findById,
  insert,
};