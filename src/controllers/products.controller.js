const productServices = require('../services/products.service');

const HTTP_OK_200 = 200;
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

module.exports = {
  findAll,
  findById,
};