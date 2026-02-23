const express = require('express')
const {dataFetchChrone} = require('../controllers/dataFetchChronController')

const routes =  express.Router();



routes.post('/fetchChrone',dataFetchChrone);



module.exports = routes;