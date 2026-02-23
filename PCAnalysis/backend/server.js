require('dotenv').config();
const express = require('express');
const postRoutes = require('./routes/post.routes')

const app = express();


const PORT = process.env.PORT;


app.use('/api/post',postRoutes);



app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`)
})
