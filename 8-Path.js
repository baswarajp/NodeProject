const path = require('path')
//gives the separater of the path
console.log(path.sep);
// it gives the file path of text.txt
const filePath = path.join('/folder/','subFolder','text.txt')
console.log(filePath);
//gives the base of file path i.e text.txt
const base = path.basename(filePath)
console.log(base);
//gives the full path of text.txt with directory name
const absolute = path.resolve(__dirname,'folder','subFolder','text.txt')
console.log(absolute);