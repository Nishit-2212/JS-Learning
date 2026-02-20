require('dotenv').config();
const express = require('express');
const zlib = require('zlib');
const fs = require('fs');
const status = require('express-status-monitor');
const axios = require('axios')
const connectDB = require('./config/db')

const readline = require('readline')
const gh_events = require('./models/gh_events')


const app = express();

const PORT = process.env.PORT;

app.use(status());
connectDB();


app.get('/fetchData', async (req, res) => {
    try {

        const uri = 'https://data.gharchive.org/2026-02-16-15.json.gz';

        // const response = await fetch(uri);


        const response = await axios({
            method: "get",
            url: uri,
            responseType: "stream"
        })

        const unzip = zlib.createUnzip();

        const writeStream = fs.createWriteStream('input.json');


        const newData = [];

        res.write('Downloading....')

        response.data
            .pipe(unzip)
            .pipe(writeStream)


        writeStream.on('finish', () => {
            res.write('Downliad and unzip the file');
            console.log("Finish");
            res.end();
        })

    } catch (err) {
        console.error(err);
        res.status(500).send('Something went wrong');
    }
});


app.get('/getHourlyData', async (req, res) => {
    const date = new Date();

    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 12) {
        month = "0" + month;
    }
    const day = date.getDate() - 1;
    const Hours = date.getHours();

    console.log(date);
    console.log(`Year Month Day`, year, month, day);
    console.log(`get Hour`, Hours);

    try {

        const uri = `https://data.gharchive.org/${year}-${month}-${day}-${Hours}.json.gz`;

        // const response = await fetch(uri);
        console.log(uri)

        const response = await axios({
            method: "get",
            url: uri,
            responseType: "stream"
        })

        const unzip = zlib.createUnzip();

        const writeStream = fs.createWriteStream('input.json');


        const newData = [];

        res.write('Downloading....')

        response.data
            .pipe(unzip)
            .pipe(writeStream)

        writeStream.on('finish', () => {
            res.write('Downliad and unzip the file');
            console.log("Finish");
            res.end();
        })

    } catch (err) {
        console.error(err);
        res.status(500).send('Something went wrong');
    }
})




app.get('/try', async (req, res) => {
    try {

        const uri = 'https://data.gharchive.org/2026-02-16-15.json.gz';

        // const response = await fetch(uri);


        const response = await axios({
            method: "get",
            url: uri,
            responseType: "stream"
        })

        const unzip = response.data.pipe(zlib.createUnzip());

        const rl = readline.createInterface({
            input: unzip,
            crlfDelay: Infinity
        })

        let newData = [];
        let limit = 0
        for await (const line of rl) {
            console.log(line)
            limit++;
            if (limit == 5) break;

            newData.push(JSON.parse(line))
            // limit++;
            // if(limit == 1000) {
            //     await gh_events.insertMany(newData);
            //     newData = [];
            //     limit = 0;
            // }
        }

        await gh_events.insertMany(newData);



        return res.status(200).send({
            msg: "Sucess",
        })




    } catch (err) {
        console.error(err);
        res.status(500).send('Something went wrong');
    }
});



app.get('/try2', async (req, res) => {
    try {

        const uri = 'https://data.gharchive.org/2026-02-16-15.json.gz';

        // const response = await fetch(uri);

        const response = await axios({
            method: "get",
            url: uri,
            responseType: "stream"
        })

        const unzip = response.data.pipe(zlib.createUnzip());

        const rl = readline.createInterface({
            input: unzip,
            crlfDelay: Infinity
        })

        let newData = [];
        let limit = 0
        for await (const line of rl) {
            limit++;
            newData.push(JSON.parse(line));
            if (limit == 10000) {
                await gh_events.insertMany(newData);
                newData = [];
                console.log('Limit', limit)
                console.log('newData length', newData.length)
                limit = 0;
            }
        }

        console.log(newData)
        await gh_events.insertMany(newData);

        return res.status(200).send({
            msg: "Sucess",
        })

    } catch (err) {
        console.error(err);
        res.status(500).send('Something went wrong');
    }
});



app.get('/try3', async (req, res) => {
    try {

        const uri = 'https://data.gharchive.org/2026-02-16-15.json.gz';

        // const response = await fetch(uri);


        const response = await axios({
            method: "get",
            url: uri,
            responseType: "stream"
        })

        const unzip = response.data.pipe(zlib.createUnzip());

        const rl = readline.createInterface({
            input: unzip,
            crlfDelay: Infinity
        })

        console.log(rl)

        for await(const line of rl) {
            await gh_events.insertOne(JSON.parse(line));
        }


        return res.status(200).send({
            msg: "Sucess",
        })

    } catch (err) {
        console.error(err);
        res.status(500).send('Something went wrong');
    }
});




app.get('/try4', async (req, res) => {
    try {

        const uri = 'https://data.gharchive.org/2026-02-16-15.json.gz';

        // const response = await fetch(uri);
        
        const response = await axios({
            method: "get",
            url: uri,
            responseType: "stream"
        })

        const unzip = response.data.pipe(zlib.createUnzip());

        const rl = readline.createInterface({
            input: unzip,
            crlfDelay: Infinity
        })

        let newData = [];
        let limit = 0
        for await (const line of rl) {
            limit++;
            newData.push(JSON.parse(line));
            if (limit == 10000) {
                await gh_events.bultWrite(newData);
                newData = [];
                console.log('Limit', limit)
                console.log('newData length', newData.length)
                limit = 0;
            }
        }

        console.log(newData)
        await gh_events.bultWrite(newData);

        return res.status(200).send({
            msg: "Sucess",
        })

    } catch (err) {
        console.error(err);
        res.status(500).send('Something went wrong');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});