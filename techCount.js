var db = require('./db');


// 要用callback
exports.get = function(techwords, cb){
    // 判断参数是否合法
    if(techwords.length === 0){
        cb([0])
        return
    }
    const arrSql = [];
    techwords.forEach(techword => {
        var subSqls = []

        const conditions = techword.split('/')

        conditions.forEach(	condition => subSqls.push(" job_desc like '%" + condition + "%' ")  )

        const likeSql = '(' + subSqls.join(' or ') + ')'

        const sql = "select '"+techword+"' as techword,  count(*) as cnt from jobdetail where locLat is not null and locLat <> '-1' and "+likeSql+" "

        arrSql.push(sql)

    })

    const sql = arrSql.join(' union all ')

    db.query(sql, function (err, rows, fields) {
        if (err) throw err;
        cb(rows)
    });
}
