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

const update = async (id, name) => {
  const doIdExists = await productModels.findById(id);

  if (!doIdExists) return { type: 'not_found', message: 'Product not found' };
  
  await productModels.update(id, name);
  
  return { type: null, message: { id, name } };
};

const deleteProduct = async (id) => {
  const doIdExists = await productModels.findById(id);

  if (!doIdExists) return { type: 'not_found', message: 'Product not found' };

  await productModels.deleteProduct(id);

  return { type: null };
};
const findByQuery = async (name) => {
  const productsByName = await productModels.findByQuery(name);

  return { type: null, message: productsByName };
};
module.exports = {
  findAll,
  findById,
  insert,
  update,
  deleteProduct,
  findByQuery,
};