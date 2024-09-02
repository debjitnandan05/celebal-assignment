//----------- HTTP Server ---------------
const http = require ("http");

const server = http.createServer((req,res)=>{
    res.write("Hello, I am your first server");
    res.end();
})

server.listen(8080,()=>{
    console.log("server is listen on port 8080");
});