const express = require('express');
const {fethAndStore, generateAnalysis,postsPerId} = require('../controllers/post.controller.js')

const routes = express.Router();



routes.post('/store',fethAndStore);
routes.get('/generateAnalysis',generateAnalysis);
routes.get('/generateAnalysis/:id',postsPerId);



module.exports = routes;