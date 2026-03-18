

const adminMiddleware = (req,res,next) => {
    console.log('1111',req)
    const role = req.user.role;
    // console.log("role",role);
    console.log("user",req.user.role)
    if(role !== 'admin') {
        return res.status(401).json({error:"You are not admin"});
    }
    next();

}


module.exports = { adminMiddleware }