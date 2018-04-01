const express = require('express')
var bodyParser = require('body-parser')

const app = express()
var techCount = require("./techCount.js")
var allCount = require("./allCount.js")
var techwords = require("./techwords.js")
var allRecWithLoc = require("./allRecWithLoc.js")


// set the view engine to ejs
app.set('view engine', 'ejs');


// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


// 设置静态资源根目录
app.use(express.static('public'))


app.get('/getTechCount', (req, res) => {
    // 要用callback
    techCount.get(data => res.json(data))
})

// post  要用到 body-parser，json 格式用 json 对应的parser （作为第二参数传入）
app.post('/getTechCount', jsonParser, (req, res) => {
    // console.log(req.body)
techCount.get(req.body ,data => res.json(data))
})


app.get('/getAllCount', (req, res) => {
    // 要用callback
    allCount.get(data => res.json(data))
})

app.get('/getAllRecWithLoc', (req, res) => {
    // 要用callback
    allRecWithLoc.get(data => res.json(data))
})



app.get('/getTechwords', (req, res) => {
    // 要用callback
    techwords.get(data => res.json(data))
})

// app.get('/select_techwords.html', (req, res) => res.sendFile(__dirname + '/select_techwords.html'))


// app.get('/TechMensionTime.html', (req, res) => res.sendFile(__dirname + '/TechMensionTime.html'))
//
// app.get('/ZhaoPinMap.html', (req, res) => res.sendFile(__dirname + '/ZhaoPinMap.html'))

// app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
// app.get('/index', (req, res) => res.sendFile(__dirname + '/index.html'))
// app.get('/index.html', (req, res) => res.sendFile(__dirname + '/index.html'))



app.listen(3000, () => console.log('Example app listening on port 3000!'))