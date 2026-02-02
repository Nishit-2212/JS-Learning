require('dotenv').config();
const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoute');
const userRoutes = require("./routes/userRoute");
const authRoutes = require("./routes/authRoute")

const app = express();
app.use(express.json())

const PORT = process.env.port || 3000;

app.use(cors({
    origin: "*",
    methods: ['GET', 'POST','PUT','DELETE'],
    headers : "Content-Type,Authorization" 
}));


app.use("/api/product",productRoutes);
app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes)



app.listen(PORT,() => {
    console.log(`Server is listening on ${PORT}`);
})

