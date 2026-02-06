const checkAllowedFields = (data = []) => {
    return ((req, res, next) => {

        if (!req.body) {
            return res.status(400).json({ message: "Your Body in null" })
        }

        console.log("All body keys")
        let boolean = true;
        let i=0;
        Object.keys(req.body).forEach(key => {
            console.log(key);
            if(key != data[i]) {
                
            }
        })

        console.log(boolean)

        next();
    })
}



module.exports = { checkAllowedFields }