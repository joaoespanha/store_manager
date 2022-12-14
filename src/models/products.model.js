const conn = require('../database');

const findAll = async () => {
  const [result] = await conn.execute(
      'SELECT  * FROM StoreManager.products;',
  );
  // console.log(result);
  return result;
};
const findById = async (id) => {
  const [[result]] = await conn.execute(
    'SELECT  * FROM StoreManager.products WHERE id = ?',
  [id],
  );
  // console.log(result);
  return result;
};

const insert = async (name) => {
  const [result] = await conn.execute(
    'INSERT INTO StoreManager.products(name) VALUES(?)',
    [name],
  );
  console.log(result);
  // console.log(result);
  return result.insertId;
};

const update = async (id, name) => {
   await conn.execute('UPDATE StoreManager.products SET name = ? WHERE id = ? ', [name, id]);
};

const deleteProduct = async (id) => {
  await conn.execute('DELETE FROM StoreManager.products WHERE id = ?;', [id]);
};

const findByQuery = async (name) => {
  const allProducts = await findAll();

  const filterName = allProducts.filter((prod) => prod.name.includes(name));
  if (filterName.length === 0) return allProducts;
  return filterName;
};

module.exports = {
  findAll,
  findById,
  insert,
  update,
  deleteProduct,
  findByQuery,
};