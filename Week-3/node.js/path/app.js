// const path = require('node:path')


// const fullPath = "/home/intern/Documents/Nishit/JS-Learning/Week-3/node.js/fs"
// console.log(path.dirname(fullPath));


const path = require('node:path');


// const notes = '/home/intern/Documents/Nishit/JS-Learning/Week-3/node.js/fs/app.log';
// console.log(path.dirname(notes));
// console.log(path.basename(notes));
// console.log(path.extname(notes));



// const name = 'joe';
// let fullPath = `/name/${name}/notes.txt`;
// console.log(fullPath)
// console.log(path.join('/user/',name,'/','notes.txt'))


// console.log(path.resolve('notes.txt'))


const fullPath = '/user/j//joe//fss///ka/note.txt'
console.log(path.normalize(fullPath))


// Get the directory name of the current module
console.log('Directory name:', __dirname);