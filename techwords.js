var config = require('./config')

module.exports.get = function(cb){
    cb(config.techwords)
}