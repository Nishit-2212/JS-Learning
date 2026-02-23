// const { createServer } = require('node:http');
import { createServer} from 'node:http';
// import { repl } from 'node:repl';
// const repl = require('node:repl')
// import { styleText } from 'node:util';


const hostname = '127.0.0';
const port = 3000;

const server = createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');
    res.end('Hello Worlddd');
});


server.listen(port,hostname, () =>{
    console.log("Server is  on https://"+hostname+ " On Port number "+port)

    const oranges = ['orange', 'oranges', 'orange', 'orange', 'ora', 'ora' ];
    const apples = ['just one apple'];
    console.log(process.env.PORT);

    // oranges.forEach(element => {
    //     console.count(element);
    // });

    // apples.forEach(element => {
    //     console.count(element);
    // });

    // console.countReset('orange')

    // oranges.forEach(element => {
    //     console.count(element);
    //     // console.trace(); 
    // });



    // calculating time
    // const countingItem = () => {
    //     oranges.forEach(element => {
    //     console.count(element);
    // });
    // }
    // const calculatTime = (fun) => {

    //     console.time(`fun()`);
    //     fun();
    //     console.timeEnd('fun()')
    // }
    // calculatTime(countingItem);


    //calculating time
    // const doSomething = () => console.log('test');
    // const measureDoingSomething = () => {
    // console.time('doSomething()');

    // doSomething();
    // console.timeEnd('doSomething()');
    // };
    // measureDoingSomething();


    // This is not working
    // console.log(styleText(['red'], 'This is red text ') + 
    //             styleText(['green', 'bold'], 'and this is green bold text ') +
    //             'this is normal text');




})




// const { createServer } = require('node:http');
// // import {createServer} from 'node:http'

// let PORT = 3000
// const server = createServer((req,res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-type','text/plain');
//     res.send("Hello");
    

// });

// server.listen(PORT, () => {
//     // const argv = process.argv.slice(2);  

//     // if(argv) {
//     //     console.log(argv);
//     // }
//     console.log(`Server is running on ${PORT}`);

//     // const arr = [3,4,5];
//     // arr.foo = "Hello";

//     // console.log(arr);

//     // for(const i in arr) {
//     //     console.log(i);
//     // }

//     // for(const i of arr) {
//     //     // console.log(i);
//     // }


// })