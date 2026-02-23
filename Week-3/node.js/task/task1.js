const fs = require('fs');


fs.readFile('input.txt','utf-8',(err,data) => {

    try{

        if(err) {
            console.log("Error in reading file",err)
            return;
        }

        writeIntoFile('output.txt',data)

    }
    catch (err) {
        console.log('error',err);
    }


})


const writeIntoFile = (filename,data) => {

    try {
        fs.writeFile(filename,data,() => {});
        console.log(`File Copied Succesfully into the ${filename}`)
    }
    catch (err) {
        console.log("error in righiting the file",err)
    }

}