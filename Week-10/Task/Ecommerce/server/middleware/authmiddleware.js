require('dotenv').config();
const jwt = require('jsonwebtoken');


const verifyToken = (req,res,next) => {

    console.log("Header: ", req.headers['authorization']);
    const authHeader = req.headers['Authorization'];
    console.log('this is my token from interceptor',authHeader);

    console.log('inner verify token middleware',req.body)

    const token = req.cookies.accessToken;
    const refreshToken = req.cookies.refreshToken;

    console.log('This is my access token',token);
    console.log('This is my refresh token',refreshToken);

    if(!refreshToken) {
        console.log("Refresh token not found");
        return res.status(404).json({error:"Access Denied"});
    }

    if(!token) {
        console.log("Token not found in verifyToken middleware");
        return res.status(401).json({error:"Access Denied"});
    }

    let secretKey = process.env.ACCESS_TOKEN_SECRET_KEY;

    console.log("Inner verify Token middleware");

    try {
        const getData = jwt.verify(token,secretKey);
        req.user =  getData;
        next();
    }
    catch(err) {
        if(err.name === "TokenExpriredError") {
            return res.status(401).json({error:"Token Expired"});
        }
        return res.status(401).json({error:"Token Invalid"});
    }

}


module.exports = { verifyToken }