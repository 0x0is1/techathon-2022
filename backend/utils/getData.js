const mysqlHandler = require("./mysql_handler");

const jsql = new mysqlHandler.Jsql();
// try {
//     jsql.jsql(`CREATE TABLE attendance_${unix}(R_NO INT PRIMARY KEY, UUID VARCHAR(100), PRESENCE_TYPE INT);`);
// }
// catch (e) { }

function getData(rawData) {
    const data = jsql.jsql(`SELECT * FROM blogpreview`);
    return data;
}

module.exports = {
    getData
};