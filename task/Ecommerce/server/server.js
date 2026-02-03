require('dotenv').config();
const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoute');
const userRoutes = require("./routes/userRoute");
const authRoutes = require("./routes/authRoute")
const categoryRoutes = require('./routes/categoryRoute');
const cookieParser = require('cookie-parser')


const app = express();
app.use(express.json())
app.use(cookieParser())

const PORT = process.env.port || 3000;
const allowOrigin = process.env.ALLOW_ORIGIN || "*";

app.use(cors({
    origin: [allowOrigin],
    credentials: true,
    methods: ['GET', 'POST','PUT','DELETE'],
    headers : ["Content-Type" ,"Authorization"] 
}));


app.use("/api/product",productRoutes);
app.use("/api/category",categoryRoutes);
app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes)



app.listen(PORT,() => {
    console.log(`Server is listening on ${PORT}`);
})

