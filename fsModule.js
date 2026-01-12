const fs = require('fs');


fs.readFile('sample.txt','utf8',(err,data) => {
    if(err) {
        console.log('Error in reading file',err)
        return;
    }
    console.log('File Content '+data);
});

console.log('Reading file....This run first')