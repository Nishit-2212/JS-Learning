const zlib = require('zlib');
const fs = require('fs');
const readline = require('readline');
const mongoose = require("mongoose");
const axios = require('axios');

const ghEventsSchema = new mongoose.Schema({}, { strict: false });
const gh_events = mongoose.model("GhEvent", ghEventsSchema);

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/gh_events");
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
};



const dataFetchChrone = async () => {
    console.log("Entered in dataFetchChrone function");
    try {
        const uri = generateHourlyURL();
        console.log("Fetching Data from this uri", uri);
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
                await gh_events.insertMany(batch, { ordered: false });
                batch = [];
            }
        }
        if (batch.length > 0) {
            await gh_events.insertMany(batch, { ordered: false });
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
    const Hours = date.getUTCHours() - 1;


    console.log(date);
    console.log(`Year Month Day`, year, month, day);
    console.log(`get Hour`, Hours);

    return `https://data.gharchive.org/${year}-${month}-${day}-${Hours}.json.gz`;

}

if (require.main === module) {
    (async () => {
        try {
            await connectDB();
            await dataFetchChrone();
        } catch (err) {
            console.error("Fatal error:", err);
            process.exit(1);
        }
    })();
}


