const express = require('express')


const app = express()


var indexRouter = require('./routes/index');

// set the view engine to ejs
app.set('view engine', 'ejs');



// 设置静态资源根目录
app.use(express.static('public'))

app.use('/', indexRouter);




app.listen(3000, () => console.log('Example app listening on port 3000!'))