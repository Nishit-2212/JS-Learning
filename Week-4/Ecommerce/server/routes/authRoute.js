const express = require("express");
const {checkLogin} = require('../controllers/authController');



const route = express.Router();


route.post("/login",checkLogin)



module.exports = route