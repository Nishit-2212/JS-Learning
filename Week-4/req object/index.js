const express = require("express");

const app = express();

app.use(express.json())  // this line is only used in req.body 

app.get("/query",(req,res) => {

    // http://127.0.0.0:3000/?a=2&b=4
    let a = parseInt(req.query.a);   // a (If you are not parsing to int so it consider as a string)
    let b = parseInt(req.query.b);   // b
    const result = a + b;  // 6
    res.send(result);
})

app.get("/params/:b",(req,res) => {

    // let a = req.params;   // {"b" : "5"}
    let a = req.params.b;     // 5
    console.log(a);
    res.send(a);
})

app.get("/body",(req,res) => {

    let getBody = req.body;
    console.log(getBody);

    res.send(getBody);

})



app.listen(3000);