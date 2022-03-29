const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res)=>{
    const data=fs.readFileSync(`${__dirname}/userapi/api.json`, "utf-8");
    
        // res.end(data);
    const objData=JSON.parse(data);
    // console.log(objData);
        
    // console.log(req.url);
    if(req.url=="/"){
        res.end("Hello this home sides");   
    }
    else if(req.url =="/about"){
    res.end("Hello from the another sides");
    }
    else if(req.url =="/contact"){
        res.write("Hello this contact sides");
        res.end();
        }
    else if(req.url =="/userapi"){
            res.writeHead(200,{"Content-type":"application/json"});
            res.end(objData[0].table_name);
            }
            //res.write("Hello from user api sides");
            
            
        else{
            res.writeHead(404,{"Content-type":"text/html"});
            res.end("<h1>404 error page</h1>");
            }
});

server.listen(5000, "127.0.0.1", ()=>{
    console.log("listening to the port no 5000");
});