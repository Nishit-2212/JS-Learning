require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoute = require("./routes/userRoutes")
 
const app = express();

connectDB();

app.use(express.json());


app.use("/api/users", userRoute);
 


const PORT = process.env.PORT || 3000;
 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.get('/fetchData', async (req, res) => {
  try {
    const uri = 'https://data.gharchive.org/2026-02-16-15.json.gz';
 
    const response = await axios({
      method: 'get',
      url: uri,
      responseType: 'stream'
    });
 
    const unzipStream = response.data.pipe(zlib.createUnzip());
 
    const rl = readline.createInterface({
      input: unzipStream,
      crlfDelay: Infinity
    });
 
    let batch = [];
    let count = 0;
 
    for await (const line of rl) {
      if (line.trim()) {
        const obj = JSON.parse(line);
        batch.push(obj);
        count++;
 
        if (batch.length === 1000) {
          await GhEvent.insertMany(batch);
          batch = [];
        }
      }
    }
 
    if (batch.length > 0) {
      await GhEvent.insertMany(batch);
    }
 
    res.send(`Inserted ${count} records successfully`);
 
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong');
  }
});