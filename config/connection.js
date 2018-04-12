//Req. Dependencies 
var mysql = require('mysql')
//For Heroku deployment and Local Database
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',//your username
        password: 'root',//your password
        database: 'da_burgers_db'
    });
}
//Connect to MySQl
connection.connect(function (err) {
    if (err) {
        console.error(' Error: MySql connection error is ---' + err.stack);
        return;
    }
    console.log('MySql is connected to the database by ID: ' + connection.threadId);
});

module.exports = connection;