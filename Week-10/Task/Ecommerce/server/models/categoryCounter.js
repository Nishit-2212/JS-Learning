const mongoose = require('mongoose');


const categoryCounter = new mongoose.Schema({
    categoryId: {
        type: Number,
        required:true
    }
})


module.exports = mongoose.model("categorycounter",categoryCounter)