// /** Database for lunchly */
// const fs = require("fs");
// const {Client} = require("pg");

// //I set up a password file so that I don't forget and accidentally upload my password to github
// let db_password = fs.readFileSync("/var/www/cerebro/CodingBootcamp/Excercises/Node/express-biztime/db_password.txt", "utf8").trim();

// let DB_URI = process.env.NODE_ENV === "test" ? `postgresql://akindeji:${db_password}@localhost:5432/lunchly_test` : `postgresql://akindeji:${db_password}@localhost:5432/lunchly`;

// let db = new Client({ connectionString : DB_URI });

// db.connect();

// module.exports = db;

/** Database for lunchly */
const fs = require("fs");
const {Pool , Client} = require("pg");

//I set up a password file so that I don't forget and accidentally upload my password to github
let db_password = fs.readFileSync("/var/www/cerebro/CodingBootcamp/Excercises/Node/express-biztime/db_password.txt", "utf8").trim();

let DB_URI = process.env.NODE_ENV === "test" ? `postgresql://akindeji:${db_password}@localhost:5432/lunchly_test` : `postgresql://akindeji:${db_password}@localhost:5432/lunchly`;



let pool = new Pool({ connectionString : DB_URI,
                    "max" : 20,
                    "ConnectionTimeoutMillis" : 5000,
                    "idleTimeoutMillis" : 1000});

let db = new Client({ connectionString : DB_URI });

db.connect();

module.exports = {db, pool};
