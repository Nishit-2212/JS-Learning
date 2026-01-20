const express = require('express')

const app = express();
const port = 3000;

// to give an access to the image
app.use(express.static('img'));

app.get('/',(req,res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`My server is listning on ${port}`)
})

