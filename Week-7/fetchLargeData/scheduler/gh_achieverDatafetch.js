const zlib = require('zlib');
const fs = require('fs');
const axios = require('axios');
const readline = require('readline');
const gh_events = require('../models/gh_events');

const cron = require('node-cron');


const dataFetchChrone = async() => {
    console.log("Entered in dataFetchChrone function");
    try {
            const uri = generateHourlyURL();
            console.log("Fetching Data from this uri",uri);
            const response = await axios({
                method: "get",
                url: uri,
                responseType: "stream"
            });
            const unzip = response.data.pipe(zlib.createGunzip());
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
                    console.log(`Line no:${batch.length} is invalid`);
                    continue;
                }
                if (batch.length === batchSize) {
                    await gh_events.insertMany(batch,{ordered: false});
                    batch = [];
                }
            }
            if (batch.length > 0) {
                await gh_events.insertMany(batch,{ordered: false});
            }
            console.log("Data fetch Store succesfully");
        } catch (err) {
            console.error(err);
        }

}


const generateHourlyURL = () => {

    let date = new Date();
    

    const year = date.getUTCFullYear();
    let month = date.getUTCMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    const day = date.getUTCDate();
    const Hours = date.getUTCHours() -1;
    

    console.log(date);
    console.log(`Year Month Day`, year, month, day);
    console.log(`get Hour`, Hours);

    return `https://data.gharchive.org/${year}-${month}-${day}-${Hours}.json.gz`;
    

}




cron.schedule('13 * * * *',dataFetchChrone)



module.exports = {dataFetchChrone}