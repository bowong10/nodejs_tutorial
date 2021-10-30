const { readFile, writeFile} = require('fs')

//readFileSync() is synchronous and blocks execution until finished. These return their results as return values
//readFile() are asynchronous and return immediately while they function in the background
readFile('./sample_files/sample_file1.txt','utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./sample_files/sample_file2.txt','utf8', (err, result) => {
        if(err){
        console.log(err)
        return
        }
        const second = result;
        
        writeFile('./sample_files/sample_WriteFile.txt', 
        `Here is the result : ${first}, ${second}`,{flag:'a'},
        (err, result) => {
            if(err){
                console.log(err)
                return
            }
             console.log('Complete Async Read Write')
        })
    })

})
