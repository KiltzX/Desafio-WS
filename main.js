require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const app = express();

const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    connection.query("SELECT * FROM cliente", (err, results) => {
        if(err){
            console.log(err);
        }
      console.log(results);
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
