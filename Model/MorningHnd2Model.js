const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MorningHnd2Model = new Schema({
    fullname: {
        type: String,

    },
    matriculation: {
        type: String,
        required: true,
        unique: true
    },
    morneven: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    name: String,
    desc: String,
    size: String,
    files: {
        data: Buffer,
        contentType: String
    }

})

module.exports = mongoose.model("General", MorningHnd2Model)