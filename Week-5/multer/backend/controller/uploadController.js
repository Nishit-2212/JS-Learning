const multer = require('multer');



const uploadImage = (req,res) => {

    console.log("Entered in UploadImage");
    console.log('Req.file...',req.file);
    console.log('Res.body....',req.body);

    const user = req.body;
    user.image = req.file.path;

    console.log(user);

    res.send("Sucessfully uploded photo.")
};





module.exports = {uploadImage};