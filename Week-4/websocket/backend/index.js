const express = require('express');
const WebSocket = require('ws');


const server = new WebSocket.Server({port:3000});

server.on('connection',socket => {
    console.log("Client Connected");


    server.message('meassage',socke)


})



