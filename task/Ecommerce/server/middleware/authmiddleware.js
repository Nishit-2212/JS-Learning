require('dotenv').config();
const jwt = require('jsonwebtoken');


const verifyToken = (req,res,next) => {
    console.log("Inside verify Token middleware");
    const authHeader = req.header('Authorization');
    console.log(authHeader);
    const token = authHeader.split(' ')[1];
    
    if(token == 'null' || token == undefined) {
        console.log("Token not found");
        res.status(401).json({error:"Access Denied"});
    }
    console.log(token)
    let secretKey = process.env.SECRET_KEY;

    console.log("Inner verify Token middleware");

    try {
        const getData = jwt.verify(token,secretKey);
        req.user =  getData;
        console.log(getData);
        next();
    }
    catch(err) {
        res.status(400).json({error:"Token Invalid"});
    }

}



module.exports = { verifyToken }