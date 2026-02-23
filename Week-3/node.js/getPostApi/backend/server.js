const express = require('express');
const { createObjectCsvWriter } = require('csv-writer');
const fs = require('fs');
const csv = require('csv-parser')
const env = require('dotenv').config();

const port = process.env.PORT


const app = express();
// const port = 3000;


app.use(express.json())


app.get('/health', (req, res) => {
    res.send("Ok");
});



app.get('/time', (req, res) => {
    let curentTime = new Date(Date.now());
    let currentTime = curentTime.toISOString();
    res.send(currentTime);
});



let users = [];
let id = 1;
app.post('/users', (req, res) => {
    console.log("Hello")
    let { name } = req.body;
    console.log(name);

    if (!name) {
        return res.status(400).json("Name is Not found")
    }

    let user = {
        "id": id,
        "name": name
    }

    id += id;

    users.push(user);
    res.status(200).json("Usser added successfully");
})




app.get('/users', (req, res) => {
    console.log("Get request hit!")

    // let getStatus = `${req.method} ${req.originalUrl} ${origin}.`
    let getStatus = `${req.method}.`
    console.log(getStatus);
    res.status(200).json(users);
});




app.get('/createcsv', (req, res) => {

    console.log("csv created");

    const csvWriter = createObjectCsvWriter({
        path: 'users.csv',
        header: [
            { id: 'id', title: 'Id' },
            { id: 'name', title: 'Name' }
        ]
    });
    csvWriter.writeRecords(users).then(() => console.log("CSV file writen succesfully."))


    res.status(200).json(".csv created successfull");
});



app.get('/readcsv', (req, res) => {

    console.log("csv read");
    const result = [];

    fs.createReadStream('users.csv')
        .pipe(csv())
        .on('data', (data) => result.push(data))
        .on('end', () => {
            console.log(result)
        });

    res.status(200).json(result);
})




app.listen(port, () => {
    console.log(`My server is listning on ${port}`)
})

