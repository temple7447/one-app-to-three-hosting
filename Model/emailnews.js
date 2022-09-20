const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Email = new Schema({
    email:{
       type:String,
        required:true
    }
    
})

module.exports  = mongoose.model("Email",Email )