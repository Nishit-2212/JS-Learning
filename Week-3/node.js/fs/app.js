const fs = require('fs').promises;
// import fs from 'fs'


// fs.readFile('example.txt','utf-8',(err, data) => {

//     if(err) {
//         console.err(err);
//         return;
//     }
//     console.log(data);

// })

fs.writeFile('example.txt','Override this text','binary');
console.log("Hello")


// const logsOnError = async(name) => {

//     try {

//         let time = new Date(Date.now());
//         // console.log(time.toISOString());
//         let log = `Time: ${time} and Name: ${name}\n`; 

//         await fs.appendFile('app.log',log,'utf-8')

//     }
//     catch (err) {
//         console.log("Erron in appending file",err)
//     }

// }

// logsOnError("Main Application")


