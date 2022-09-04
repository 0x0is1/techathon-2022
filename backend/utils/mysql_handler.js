var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "test2"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

const RunCommand = (command) => {
        return new Promise((resolve, reject) => {        
    con.query(command, (err, result) => {
    if (err) {
        reject(err);
    }
    else {
        resolve(result);
    }
    });
});
}

module.exports = {
    RunCommand
};