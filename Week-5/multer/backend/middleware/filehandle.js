const multer = require('multer');

// const upload = multer({dest:"upload/"});

// const handleFileRequest = (req,res,next) => {

//     console.log("req.body",req.body)
//     upload.single("photo");
//     next();

// }

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/product-image/")
    },
    filename: (req, file, cb) => {
        // const uniqueName = `${Date.now()}-${file.originalname}`;
        const uniqueName = `user-${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    }
})


const upload = multer({
    storage,
    limits: { fileSize: 1 * 1024 * 1024 } // 1MB
});



module.exports = { 
    uploadSingle : (fields) => upload.single(fields)
 }