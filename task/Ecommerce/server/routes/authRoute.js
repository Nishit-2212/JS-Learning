const express = require("express");
const { checkLogin, getDataFromToken, logOut } = require('../controllers/authController');
const { createUser } = require('../controllers/userController')



const route = express.Router();


route.post("/signup", createUser);
route.post("/login",checkLogin);
route.get("/logout",logOut);
route.get("/verifyToken",getDataFromToken)



module.exports = route