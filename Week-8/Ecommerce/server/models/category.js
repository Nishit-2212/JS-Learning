const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    }
})

module.exports = mongoose.model("category", categorySchema)

