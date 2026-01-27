require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.port;

// without this we are getting CORS error in console and in network tab too.
app.use(cors())

app.use(express.json());
// app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    const data = req.body;

    console.log(data)

    res.send(data)
})


app.post('/data', (req, res) => {
    console.log("Entered in Backend post method");
    const data = req.body;
    console.log(data)

    res.send("SEnt data")
})


app.listen(PORT, () => {
    console.log(`Backend Server is running on ${PORT}`)
})