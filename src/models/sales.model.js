const conn = require('../database');

const registerSale = async () => {
  const [{ insertId }] = await conn.execute(
    'INSERT INTO StoreManager.sales(date) VALUES(default)',
    [],
  );

  return insertId;
};

const insertSaleInfo = async (saleId, productId, productQuantity) => {
    const [rows] = await conn.execute(
      'INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity) VALUES(?, ?, ?)',
      [saleId, productId, productQuantity],
  );

   console.log('ROWS', rows);
};
module.exports = {
  registerSale,
  insertSaleInfo,
};