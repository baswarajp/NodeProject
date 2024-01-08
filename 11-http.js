const http = require('http')
const server = http.createServer((req,res) =>{
if(req.url === '/'){
    res.end("this is the home page")
}
if(req.url ==='/about'){
    res.end("this the short description!!")
}
res.end(`
    <h1> Oops!!</h1>
    <p>This page doesnot not exist</p>
    <a href="/">Back to home</a>
    `  
)
})
server.listen(5000)