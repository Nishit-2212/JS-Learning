const mongoose = require('mongoose');


const userCounter = new mongoose.Schema({
    userId: {
        type:Number,
        required:true
    }
}) 


module.exports = mongoose.model("usercounter",userCounter)

