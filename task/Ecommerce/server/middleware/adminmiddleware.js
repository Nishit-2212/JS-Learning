

const adminMiddleware = (req,res,next) => {

    const role = req.user.role;
    // console.log("role",role);
    console.log("user",req.user.role)
    if(role == 'admin') {
        next();
    }

    return res.status(401).json({error:"You are not admin"})
}


module.exports = { adminMiddleware }