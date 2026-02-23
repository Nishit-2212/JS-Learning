require('dotenv').config;
const express = require('express');
const cors = require('cors');
const { EventEmitter } = require('events');


const app = express();
const emitter = new EventEmitter();
const PORT = process.env.port || 3000;

app.use(cors())
app.use(express.json());



emitter.on('orderplace',(orderId) => {

    console.log("Order Event Recieved");

    setTimeout(() => {
        console.log(`Your order:-${orderId} is successfully placed`);
    },3000)

})


app.post('/order',(req,res) => {

    const orderInfo = req.body;
    console.log(orderInfo.orderId);

    emitter.emit('orderplace',orderInfo.orderId)
    
    res.json({
        message:"succesfully placed",
        orderInfo
    })
})


app.listen(PORT,() => {
    console.log(`Your server is running on ${PORT}`);
})

