const mongoose = require('mongoose')
const userdetailSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('family details',userdetailSchema)