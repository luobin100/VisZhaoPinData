const express = require('express')
var mysql = require('mysql');
const app = express()

// set the view engine to ejs
app.set('view engine', 'ejs');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  database: "HipdaScr"
});

sql = "SELECT title.title,\
    post.postMessage,\
    post.*\
    FROM TB_Post_deldetect post\
    join TB_Title_deldetect title\
    on title.tid = post.tid\
    order by post.tid desc, post.floorNum;"

con.connect(function(err) {
    if (err) throw err;
})

app.get('/latest', function(req, res){  
    con.query(sql, function (err, rows, fields) {
        if (err) throw err;
        // console.log(result);

        res.render('pages/latest', {
            rows: rows
        });
    
    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))