const express = require("express");
const { csvWriter, csvReader } = require("./controller/csvController")


const app = express();


const PORT = 3000

app.use(express.json())


app.post("/product",csvWriter);
app.get("/product",csvReader);

app.listen(PORT,() => {
    console.log(`You server is Running on ${PORT}`);
})