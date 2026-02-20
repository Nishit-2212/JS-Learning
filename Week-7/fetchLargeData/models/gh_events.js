const mongoose = require("mongoose");
 
const ghEvents = new mongoose.Schema({}, { strict : false });
 

module.exports = mongoose.model("gh_events", ghEvents);