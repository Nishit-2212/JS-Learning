require('dotenv').config();
const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoute');
const userRoutes = require("./routes/userRoute");
const authRoutes = require("./routes/authRoute")
const {verifyToken} = require("./middleware/authmiddleware")

const app = express();
app.use(express.json())

const PORT = process.env.port || 3000;

// :TODO change to specific origin
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST'],
    headers : "Content-Type" 
}));


app.use("/api/product",verifyToken,productRoutes);
app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes)



app.listen(PORT,() => {
    console.log(`Server is listening on ${PORT}`);
})

