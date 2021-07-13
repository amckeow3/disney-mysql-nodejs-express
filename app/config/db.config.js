const mysql = require('mysql');

const pool = mysql.createPool({
    host: "rds-mysql-disneydb.cougxk1hwpdx.us-east-1.rds.amazonaws.com",
    user: "awsadmin",
    password: "KaiLeon1",
    database: "disneydb",
    port: 3306,
    connectionLimit: 5
});

module.exports = pool;