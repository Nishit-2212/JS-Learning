const express = require('express');
const { createUser } = require('../controllers/userController')

const route = express.Router();



route.post("/create-user",(req,res) => {
    let userData = req.body;
    try {
        createUser(userData);
        res.status(201).json({message: "User is Created succesfully"})
    }
    catch (err) {
        console.log("Error in creating User:-",err);
        res.status(400).json({message: "User is not created"});
    }
})


module.exports = route;
