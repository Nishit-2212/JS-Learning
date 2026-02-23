const express = require('express');
const cors = require('cors');
const {uploadImage,getPhoto} = require('./controller/uploadController');
const {uploadSingle} = require('./middleware/filehandle')

const app = express();
const PORT = 3000;


app.use("/proImages",express.static("public/product-image"));

app.use(cors());

// app.post("/upload",upload.single("photo"),(req,res) => {
//     console.log('Req.file...',req.file);
//     console.log('Res.body....',req.body);

//     res.send("Sucessfully uploded photo.")
// })

app.post("/normal-upload",uploadSingle("photo"),uploadImage);

app.get("/get-photo",(req,res) => {
    res.render('static_images')
});




app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`);
})