require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');





const userModel = require('../models/user')

const generateRefreshToken = (UserId) => {
    try {
        const data = {
            "id": UserId
        }
        const secretKey = process.env.REFRESH_TOKEN_SECRET_KEY;
        const token = jwt.sign(data, secretKey, { expiresIn: '1d' });
        return token;
    }
    catch (Err) {
        console.log("Error in Generating RefreshToken", Err)
    }
}

const generateAccessToken = (loginData) => {
    try {
        console.log("inside generate token logindata", loginData.email)
        const data = {
            "id": loginData._id,
            "email": loginData.email,
            "role": loginData.role,
            "name": loginData.username
        }
        console.log("role in generateTOken", loginData.username);
        const secretKey = process.env.ACCESS_TOKEN_SECRET_KEY;
        const token = jwt.sign(data, secretKey, { expiresIn: '1d' });

        return token;
    }
    catch (err) {
        console.log("Erro in generating token:-", err);
    }
}




const checkLogin = async (req, res) => {

    const loginData = req.body;
    console.log("inside login", loginData)


    try {

        const getUserData = await userModel.findOne({ email: loginData.email })

        console.log("getUserData", getUserData)

        if (!getUserData) {
            return res.status(400).json({ message: "email is not found" })
        }

        let { password } = loginData
        let storedPassword = getUserData.password;
        console.log("pass,store", password, storedPassword);
        const passwordMatched = await bcrypt.compare(password, storedPassword);


        if (!passwordMatched) {
            return res.status(400).json({ message: "password is incorrect" })
        }
        const token = generateAccessToken(getUserData);
        const RefreshToken = generateRefreshToken(getUserData._id);

        res.cookie('refreshToken', RefreshToken, {
            httpOnly: true,
            sameSite: "None",
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000, //7 Day
            path: "/"
        });

        res.cookie('accessToken', token, {
            httpOnly: true,
            sameSite: "None",
            secure: true,
            maxAge: 1 * 24 * 60 * 60 * 1000, //1 Day
            path: "/"
        });

        // console.log(res)

        return res.status(200).json({
            message: "Login sucessful"
        })
    }
    catch (err) {
        console.log("Something goes wrong wile login", err);
        res.status(200).json({ message: "Something is Going wrong" })
    }
}





const getDataFromToken = (req, res) => {
    console.log("inner getDataFromToken")
    const token = req.cookies.accessToken || null;
    const refreshToken = req.cookies.refreshToken || null;

    if (!token || !refreshToken) {
        console.log("Token not found");
        return res.status(401).json({ message: "Token not found" })
    }

    console.log(token)
    let secretKey = process.env.ACCESS_TOKEN_SECRET_KEY;

    try {
        const getData = jwt.verify(token, secretKey);
        // req.user = getData;
        console.log(getData);
        return res.status(200).send(getData);
    }
    catch (err) {
        return res.status(400).json({ error: "Token Invalid" });
    }

}


const getUserFromRefreshToken = async(token) => {

    const secretKey = process.env.REFRESH_TOKEN_SECRET_KEY;

    try {
        const decryptToken = jwt.verify(token, secretKey);
        console.log("User Id from refresh token", decryptToken.id)
        const user = await userModel.find({userId:decryptToken.id})

        if (user == undefined) {
            console.log("User not Found")
            return null;
        }
        return user;
    }
    catch (Err) {
        if (Err.name === "TokenExpiredError") {
            return null;
            // console.log("Inner Catch")
            // return res.status(404).json({error:"Refresh Token Expired"});
        }
        console.log("Error in geting data from refreshToken", Err)
    }
}


const generateTokenFromRefreshToken = (req, res) => {

    const refreshToken = req.cookies.refreshToken || null;
    console.log("Inner generateTokenFromRefreshToken");
    if (!refreshToken) {
        return res.status(400).json({ message: "Refresh Token is not found" });
    }

    try {
        const user = getUserFromRefreshToken(refreshToken);

        if (!user) {
            return res.status(400).json({ message: "User not Found" })
        }

        console.log(user)
        const newAccessToken = generateAccessToken(user);
        console.log("New Access Token", newAccessToken);

        res.cookie('accessToken', newAccessToken, {
            httpOnly: true,
            sameSite: "None",
            secure: true,
            maxAge: 1 * 24 * 60 * 60 * 1000, //1 Day
            path: "/"
        });

        console.log("End generateTokenFromRefreshToken");
        return res.status(200).json({
            message: "new Access Token generated Succesfully"
        })
    }
    catch (err) {
        console.log("Error in generating newAccessToken", err)
        return res.status(400).json({
            message: "Error in generating new Access token",
        })
    }



}


const logOut = (req, res) => {

    console.log("Inner Logout");


    res.clearCookie('accessToken', {
        httpOnly: true,
        sameSite: "None",
        secure: true,
        path: "/"
    });

    res.clearCookie('refreshToken', {
        httpOnly: true,
        sameSite: "None",
        secure: true,
        path: "/"
    });

    res.status(200).json({ message: "Clear Cookie SuccessFully" })

}







module.exports = { checkLogin, getDataFromToken, logOut, generateTokenFromRefreshToken }