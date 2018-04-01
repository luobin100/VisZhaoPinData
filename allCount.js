var db = require('./db');

// 要用callback
exports.get = function(cb){

    const sql = "select count(*) as cnt from jobdetail where locLat is not null and locLat <> '-1' ;"

    db.query(sql, function (err, rows, fields) {
        if (err) throw err;
        cb(rows)
    });
}
