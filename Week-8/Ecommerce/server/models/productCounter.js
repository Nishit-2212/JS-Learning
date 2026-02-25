const mongoose = require('mongoose');


const productCounter = new mongoose.Schema({
    productId: {
        type:Number,
        required:true
    }
})


module.exports = mongoose.model("productcounter",productCounter);