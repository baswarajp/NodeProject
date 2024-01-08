const {readFileSync,writeFileSync} =require('fs')
//for reading the file in synchronous way
const first = readFileSync('./folder/first.txt','utf-8')
const second = readFileSync('./folder/second.txt','utf8')

console.log(first,second);
//for writing the file
writeFileSync('./folder/result','this file written with writefile sync')
//for writing the file using the existing file. 
//This will overwrite the content if have any in result file
writeFileSync('./folder/resultWithMergeOfOtherPages',`here is the result: ${first}, ${second}`)
//This file will append the content
writeFileSync('./folder/resultWithMergeOfOtherPages',`here is the result: ${first}`,{flag:'a'})