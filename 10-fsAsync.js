const {readFile,writeFile} = require('fs')

readFile('./folder/first.txt','utf8',(err,result) =>{
    if(err){
        console.log("error",err);
        return
    }
    const first = result
    console.log(first);
    readFile('./folder/second.txt','utf8',(err,result)=>{
        if(err){
            console.log("error",err);
            return
        }
        const second = result
        console.log(second);
        writeFile('./folder/resultAsync.txt',`here is the result of asyn file ${first},${second}`,{flag:"a"},(err,result)=>{
            if(err){
                console.log("error",err);
                return
            }
            console.log(result);
        })
    })
})