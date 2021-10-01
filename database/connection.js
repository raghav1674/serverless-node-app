const mysql = require("mysql");

var mySql = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  })
  
  mySql.connect((err)=>{
      if(!err)console.log("Connected");
       else console.log("Connection Failed");
  });
  
  module.exports = mySql;
  