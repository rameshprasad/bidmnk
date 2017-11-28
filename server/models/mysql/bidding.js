var dbConn = require("./dbConn");

module.exports.read = function (param, callback) {
    var result = {};
    var conn = dbConn.getDbConn();
    var sqlQuery = "SELECT bidderName, bidAmount, winAmount from tblbid ORDER BY bidId";
    conn.query(sqlQuery, function (err, data) {
        if (!err) {
            result.status = 's';
            result.data = data;
        }
        else {
            result.status = 'f';
            result.msg = 'Error in records retrieval.';
        }
        callback(null, result);
        conn.end();
    });
}
