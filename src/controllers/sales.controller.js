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

module.exports = {
  insert,
};