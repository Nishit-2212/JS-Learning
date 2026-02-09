const multer = require('multer');



const uploadImage = (req,res) => {

    console.log("Entered in UploadImage");
    console.log('Req.file...',req.file);
    console.log('Res.body....',req.body);

    res.send("Sucessfully uploded photo.")
};

const getPhoto = (req,res) => {



}




module.exports = {uploadImage, getPhoto};