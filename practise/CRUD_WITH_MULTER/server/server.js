require('dotenv').config();
const express = require("express");
const cors = require('cors');
const productRoutes = require('./routes/product.routes.js')


const app = express();

const PORT = process.env.PORT;
const ORIGIN = process.env.ORIGIN;

app.use(express.json())

console.log(ORIGIN);

app.use(cors({
    origin: ["http://127.0.0.1:5500","http://localhost:5500"],
    methods: ['GET,POST,PUT,DELETE'],
    headers: ['Content-Type']
}))
app.use(express.json());

// :TODO CORS unable
// app.use()


//Product CRUD
// Id,name,category,price

// User 
// id,name,email,password,role


app.use('/api/product',productRoutes);



app.listen(PORT,() => {
    console.log(`Server is Running on ${PORT}`);
})