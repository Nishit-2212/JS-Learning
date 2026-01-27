const express = require('express');
require('dotenv').config();

const app = express();
let PORT = process.env.port || 5000;

app.use(express.json())

// one way to hard coded function
function userAccess(req, res, next) {
    let userData = req.body.role;
    if (userData != 'user') {
        res.status(401).json("You can't access this.")
    }
    console.log("Inner role checking middleware");
    next();
}

//second way with loose coupling with single functio handle different roles
function access(role) {
    return (req, res, next) => {
        let userData = req.body.role;
        if (userData != role) {
            res.status(401).json("You can't access this.")
        }
        console.log(role)
        console.log("Inner role checking middleware");
        next();
    }
}

// Or you can use this if you are checking user role in all routes
// app.use(userAccess);


app.get('/user', userAccess, (req, res, next) => {
    console.log("before sending")
    res.send('Hello users');
})


app.get('/admin',access('admin'), (req, res) => {
    res.send('Hello admin');
})




app.listen(PORT, () => {
    console.log(`Server is listning on ${PORT}`);
})