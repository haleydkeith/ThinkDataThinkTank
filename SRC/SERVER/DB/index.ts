import * as mysql from "mysql";
import config from "../config";
import books from "./queries/books";
import videos from "./queries/videos";

//pool creates/ends mysql connection 
const pool = mysql.createPool(config.mysql);
console.log("MySQL connection made");

export const Query = <T = any>(query: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {
      const sql = mysql.format(query, values);
      console.log(sql);
  
      pool.query(sql, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };
  
  export default {
    books,
    videos,
  };

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "mysql.infoschema",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("You're muted!");
});