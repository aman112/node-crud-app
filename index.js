const http=require('http');
const hostname="localhost";
const port="3000";

const server=http.createServer((req,res)=>{
    
});

server.listen(port,hostname,()=>{
    console.log(`Server successfully running at ${hostname}:${port}`);
})