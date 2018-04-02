var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

var techCount = require("../techCount.js")
var allCount = require("../allCount.js")
var techwords = require("../techwords.js")
var allRecWithLoc = require("../allRecWithLoc.js")

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });



// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })



router.get('/getTechCount', (req, res) => {
    // 要用callback
    techCount.get(data => res.json(data))
})

// post  要用到 body-parser，json 格式用 json 对应的parser （作为第二参数传入）
router.post('/getTechCount', jsonParser, (req, res) => {
    // console.log(req.body)
    techCount.get(req.body ,data => res.json(data))
})


router.get('/getAllCount', (req, res) => {
    // 要用callback
    allCount.get(data => res.json(data))
})

router.get('/getAllRecWithLoc', (req, res) => {
    // 要用callback
    allRecWithLoc.get(data => res.json(data))
})



router.get('/getTechwords', (req, res) => {
    // 要用callback
    techwords.get(data => res.json(data))
})



module.exports = router;
