//Req. Dependencies 
var mysql = require('mysql')
//Local DB
var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'da_burgers_db'
});

//Connect to MySQl
connection.connect(function (err) {
    if (err) {
        console.error(' Error: MySql connection error is ---' + err.stack);
        return;
    }
    console.log('MySql is connected to the database by ID: ' + connection.threadId);
});

module.exports = connection;