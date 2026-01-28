require('dotenv').config();
const express = require('express');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoute');

const app = express();
app.use(express.json())

const PORT = process.env.port || 3000;

// :TODO change to specific origin
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST'],
    headers : "Content-Type" 
}));


app.use("/api/product",studentRoutes);



app.listen(PORT,() => {
    console.log(`Server is listening on ${PORT}`);
})

