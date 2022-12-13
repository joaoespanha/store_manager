const conn = require('../database');

const registerSale = async () => {
  const [{ insertId }] = await conn.execute(
    'INSERT INTO StoreManager.sales(date) VALUES(default)',
    [],
  );

  return insertId;
};

const insertSaleInfo = async (saleId, productId, productQuantity) => {
     await conn.execute(
      'INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity) VALUES(?, ?, ?)',
      [saleId, productId, productQuantity],
  );
};

const getAll = async () => {
  const [result] = await conn.execute(
    `SELECT 
    sp.sale_id AS saleId,
    s.date,
    sp.product_id AS productId,
    sp.quantity
FROM
    StoreManager.sales_products AS sp
        INNER JOIN
    StoreManager.sales AS s ON sp.sale_id = s.id;`,
  );
  return result;
};

const findById = async (id) => {
  const [result] = await conn.execute(`SELECT 
    s.date,
    sp.product_id AS productId,
    sp.quantity
FROM
    StoreManager.sales_products AS sp
        INNER JOIN
    StoreManager.sales AS s ON sp.sale_id = s.id WHERE sp.sale_id = ?
    ORDER BY sp.sale_id, sp.product_id;`, [id]);
  
  return result;
};

module.exports = {
  registerSale,
  insertSaleInfo,
  getAll,
  findById,
};