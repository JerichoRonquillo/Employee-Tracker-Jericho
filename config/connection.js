const mysql = require("mysql2");
require('dotenv').config();

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: process.env.DB_USER,
      // mySQL password
      password: process.env.DB_PASSWORD,
      // mySQL database
      database: process.env.DB_NAME
    },
    console.log(`Connected to the ${process.env.DB_NAME} database.`)
  );
//exporting the db function
module.exports = db;