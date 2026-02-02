require('dotenv').config();
const bcrypt = require('bcrypt');
const { LocalStorage } = require('node-localstorage');
const jwt = require('jsonwebtoken');

let localStorage = new LocalStorage('./models')

let userData = JSON.parse(localStorage.getItem("user")) || [];



const generateToken = (loginData) => {
    try {
        console.log("inside generate token logindata", loginData.email)
        const data = {
            "email": loginData.email,
            "role": loginData.role
        }
        console.log("role in generateTOken", loginData.role);
        const secretKey = process.env.SECRET_KEY;
        const token = jwt.sign(data, secretKey, { expiresIn: '1h' });

        return token;
    }
    catch (err) {
        console.log("Erro in generating token:-", err);
    }
}




const checkLogin = async (req, res) => {

    const loginData = req.body;
    console.log("inside login", loginData)

    console.log("userData", loginData)
    const getUserData = userData.find(user => user.email === loginData.email);

    if (!getUserData) {
        return res.status(400).json({ message: "email is not found" })
    }

    console.log(getUserData)
    let { password } = loginData
    let storedPassword = getUserData.password;
    console.log("pass,store", password, storedPassword);
    const passwordMatched = await bcrypt.compare(password, storedPassword);


    if (!passwordMatched) {
        return res.status(400).json({ message: "password is incorrect" })
    }
    const token = generateToken(getUserData);

    return res.status(200).json({
        message: "Login sucessful",
        token: token
    })
}





const getDataFromToken = async (req, res) => {

    const authHeader = req.header('Authorization');
    const token = authHeader.split(' ')[1];

    if (token == 'null' || token == undefined) {
        console.log("Token not found");
        return res.status(401).json({ error: "Token not found" });
    }

    console.log(token)
    let secretKey = process.env.SECRET_KEY;

    try {
        const getData = jwt.verify(token, secretKey);
        req.user = getData;
        console.log(getData);
        return res.status(200).send(getData);
        
    }
    catch (err) {
        return res.status(400).json({ error: "Token Invalid" });
    }

}







module.exports = { checkLogin, getDataFromToken }