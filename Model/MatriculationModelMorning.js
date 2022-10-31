const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MatriculationModelMorning = new Schema({
    
    matriculation:{
       type:String,
    }
    
})

module.exports  = mongoose.model("MatriculationMorning",MatriculationModelMorning )