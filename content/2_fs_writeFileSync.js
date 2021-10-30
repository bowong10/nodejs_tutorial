const { readFileSync,writeFileSync} = require('fs')

//readFileSync() is synchronous and blocks execution until finished. These return their results as return values
//readFile() are asynchronous and return immediately while they function in the background
const first = readFileSync('./sample_files/sample_file1.txt','utf8')
const second = readFileSync('./sample_files/sample_file2.txt','utf8')

// append mode => {flag:'a'}
writeFileSync('./sample_files/sample_WriteFile.txt', `Here is the result : ${first}, ${second}`,{flag:'a'})