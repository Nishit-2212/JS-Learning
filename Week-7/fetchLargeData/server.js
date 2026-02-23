require('dotenv').config();
const express = require('express');
const status = require('express-status-monitor');
const connectDB = require('./config/db');
const dataHandlingRoute = require('./routes/dataHandlingRoute');

// Running this as a scheduler
require('./scheduler/gh_achieverDatafetch')

const app = express();

const PORT = process.env.PORT;

app.use(status());
connectDB();

app.use('/dataHandle',dataHandlingRoute);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});