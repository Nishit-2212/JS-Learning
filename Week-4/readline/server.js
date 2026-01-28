const readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)


// rl.question('What is you question:- ',(que) => {
//     console.log(`Your question is ${que}`);
//     rl.close()
// })


rl.setPrompt("What is you Question");
rl.prompt();
rl.on('line',(age) => {
    console.log(`Your Question is ${age}`);
    rl.close()
})


rl.on('pause', () => {
    console.log('Paused Event is invoked');
});


