const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        type:Number,
        required:true
    },
    username: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required:true,
        unique: true
    },
    role: {
        type:String,
        default: 'user'
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("User",userSchema);