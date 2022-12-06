const mySql = require('mysql2/promise');
require('dotenv').config();

const connection = mySql.createPool({
  port: process.env.MYSQL_PORT || 3306,
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE || 'StoreManager',
});

module.exports = connection;