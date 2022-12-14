const salesServices = require('../services/sales.service');

const HTTP_OK_201 = 201;
const HTTP_NOT_FOUND_404 = 404;

const insert = async (req, res) => {
  const sales = req.body;
  const { message, type } = await salesServices.insert(sales);
  // console.log('message:', message, 'type:', type);
  
  if (type) return res.status(HTTP_NOT_FOUND_404).json({ message }); 
  
  return res.status(HTTP_OK_201).json(message);
};
const validateReq = () => null;

const getAll = async (_req, res) => {
  const { message, type } = await salesServices.getAll();
  if (!type) return res.status(200).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { message, type } = await salesServices.findById(id);

  if (type) return res.status(HTTP_NOT_FOUND_404).json({ message });
  return res.status(200).json(message);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const { message, type } = await salesServices.deleteSale(id);

  if (type) return res.status(HTTP_NOT_FOUND_404).json({ message });

  return res.status(204).json();
};
module.exports = {
  insert,
  getAll,
  findById,
  deleteSale,
  validateReq,
};