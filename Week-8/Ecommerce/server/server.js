require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoute');
const authRoutes = require("./routes/authRoute")
const categoryRoutes = require('./routes/categoryRoute');
const cookieParser = require('cookie-parser');
const connectDB = require("./config/db");


const app = express();

connectDB();

app.use(express.json())
app.use(cookieParser())

const PORT = process.env.port || 3000;
const ALLOW_ORIGIN = process.env.ALLOW_ORIGIN || "*";

app.use(cors({
    origin: [ALLOW_ORIGIN],
    credentials: true,
    methods: ['GET', 'POST','PUT','DELETE'],
    headers : ["Content-Type" ,"Authorization"] 
}));


app.use("/api/product",productRoutes);
app.use("/api/category",categoryRoutes);
app.use("/api/auth",authRoutes)



app.listen(PORT,() => {
    console.log(`Server is listening on ${PORT}`);
})

