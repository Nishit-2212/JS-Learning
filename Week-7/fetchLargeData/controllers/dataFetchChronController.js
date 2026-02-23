const zlib = require('zlib');
const fs = require('fs');
const status = require('express-status-monitor');
const axios = require('axios');
const readline = require('readline');
const gh_events = require('../models/gh_events');



const dataFetchChrone = async(req,res) => {
    console.log("Entered in dataFetchChrone function");
    try {
            const uri = generateHourlyURL();
            console.log("Fetching Data from this uri",uri);
            const response = await axios({
                method: "get",
                url: uri,
                responseType: "stream"
            });
            const unzip = response.data.pipe(zlib.createUnzip());
            const rl = readline.createInterface({
                input: unzip,
                crlfDelay: Infinity
            });
            let batch = [];
            const batchSize = 1000;
            for await (const line of rl) {
                try {
                    batch.push(JSON.parse(line));
                } catch {
                    continue;
                }
                if (batch.length === batchSize) {
                    await gh_events.insertMany(batch);
                    batch = [];
                }
            }
            if (batch.length > 0) {
                await gh_events.insertMany(batch);
            }
            console.log("Data fetch Store succesfully");
            return res.status(200).send({ msg: "Success" });
        } catch (err) {
            console.error(err);
            return res.status(500).send('Something went wrong');
        }

}


const generateHourlyURL = () => {

    let date = new Date();
    

    const year = date.getUTCFullYear();
    let month = date.getUTCMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    const day = date.getUTCDate() - 1;
    const Hours = date.getUTCHours();
    

    console.log(date);
    console.log(`Year Month Day`, year, month, day);
    console.log(`get Hour`, Hours);

    return `https://data.gharchive.org/${year}-${month}-${day}-${Hours}.json.gz`;
    

}





module.exports = {dataFetchChrone}