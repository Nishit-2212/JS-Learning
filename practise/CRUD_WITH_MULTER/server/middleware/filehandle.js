const multer = require('multer');

const upload = multer({dest:"photo/"});

const handleFileRequest = (req,res,next) => {

    console.log("req.body",req.body)
    upload.single("photo");
    next();

}



module.exports = {handleFileRequest}