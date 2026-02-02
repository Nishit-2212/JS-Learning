require('dotenv').config();
const bcrypt = require('bcrypt');
const { LocalStorage } = require('node-localstorage');
const jwt = require('jsonwebtoken');

let localStorage = new LocalStorage('./models')

let userData = JSON.parse(localStorage.getItem("user")) || [];



const generateToken = (loginData) => {
    try {
        console.log("inside generate token logindata",loginData.email)
        const data = {
            "email": loginData.email,
            "role" : loginData.role
        }
        console.log("role in generateTOken",loginData.role);
        const secretKey = process.env.SECRET_KEY;
        const token = jwt.sign(data, secretKey, {expiresIn: '1h'});

        return token;
    }
    catch (err) {
        console.log("Erro in generating token:-", err);
    }
}




const checkLogin = async (req, res) => {

    const loginData = req.body;
    console.log("inside login",loginData)

    console.log("userData",loginData)
    const getUserData = userData.find(user => user.email === loginData.email);

    if (!getUserData) {
        return res.status(400).json({ message: "email is not found" })
        
    }

    console.log(getUserData)
    let {password} = loginData
    let storedPassword = getUserData.password;
    console.log("pass,store", password, storedPassword);
    const passwordMatched = await bcrypt.compare(password, storedPassword);

    
    if (!passwordMatched) {
        res.status(400).json({ message: "password is incorrect" })
    }
    const token = generateToken(getUserData);

    res.status(200).json({
        message: "Login sucessful",
        token: token
    })
}










module.exports = { checkLogin }