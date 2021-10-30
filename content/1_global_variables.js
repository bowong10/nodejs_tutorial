//A read–eval–print loop (REPL), also termed an interactive toplevel or language shell

////// GLOBAL VARIABLES
// list global variables, but no __???
console.log(Object.getOwnPropertyNames(this));

console.log(__dirname);
console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(process);

// require a built in module - os
const os = require('os');
console.log(os.userInfo());
console.log(`The system Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);

//  path module
const path = require('path')
console.log(path.sep)
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

console.log(path.basename(filePath))

const absolutePath = path.resolve(__dirname, 'app.js')
console.log(absolutePath)

const absolutePath = path.resolve(__dirname, 'content', 'app.js')
console.log(absolutePath)


