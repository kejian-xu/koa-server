const mongoose = require('mongoose') 

let articleSchema = new mongoose.Schema({
    name:String,
    message:String,
    createTime:Date,
    updateTime:Date
})

module.exports = mongoose.model('ClassMenu',userSchema)