const express = require("express");
const {checkLogin} = require('../controllers/authController');
const { createUser } = require('../controllers/userController')



const route = express.Router();


route.post("/signup", createUser);
route.post("/login",checkLogin);



module.exports = route