const productServices = require('../services/products.service');

const HTTP_OK_200 = 200;
const HTTP_OK_201 = 201;

const HTTP_ERROR_404 = 404;

const findAll = async (_req, res) => {
  const { message } = await productServices.findAll();
    res.status(HTTP_OK_200).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productServices.findById(id);

  if (!type) return res.status(HTTP_OK_200).json(message);
  
  return res.status(HTTP_ERROR_404).json({ message });
};

const insert = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productServices.insert(name);

  if (!type) return res.status(HTTP_OK_201).json(message);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const { type, message } = await productServices.update(id, name);

  if (type) return res.status(HTTP_ERROR_404).json({ message });

  return res.status(200).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const { type } = await productServices.deleteProduct(id);

  if (type) return res.status(404).json({ message: 'Product not found' });

  return res.status(204).json();
};

module.exports = {
  findAll,
  findById,
  insert,
  update,
  deleteProduct,
};