const express = require('express');
const productRouter = require('./routes/product/product.route.js')
require('dotenv').config();


const app = express();
const PORT = process.env.PORT;


app.use(express.json());

app.use("/product",productRouter);

app.get("/",(req,res) => {
    res.send("Hello From Server");
    res.end();
})


app.listen(PORT,() => {
    console.log(`Listning on PORT no:- ${PORT}`);
})


