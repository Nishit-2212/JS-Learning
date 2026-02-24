const express = require("express");
const { checkLogin, getDataFromToken, logOut, generateTokenFromRefreshToken } = require('../controllers/authController');
const { createUser } = require('../controllers/userController')
const { verifyToken } = require('../middleware/authmiddleware.js');
const { checkAllowedFields } = require('../middleware/checkAllowedFields.js');
const { loginAllowedFields } = require('../config/allowFieldsArray.js')


const route = express.Router();


route.post("/signup", checkAllowedFields(loginAllowedFields), createUser);
route.post("/login",checkLogin);
route.get("/logout",logOut);
route.get("/verifyToken",verifyToken, getDataFromToken)
route.post("/generateToken",generateTokenFromRefreshToken)



module.exports = route