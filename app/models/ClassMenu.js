const mongoose = require('mongoose') 

let classMenuSchema = new mongoose.Schema({
    name:String,
    createTime:Date,
    updateTime:Date
})

module.exports = mongoose.model('ClassMenu',userSchema)