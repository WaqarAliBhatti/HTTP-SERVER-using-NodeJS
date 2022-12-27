const http=require('http');
const fs=require('fs');
//storing reerence to Files in variables 
const home=fs.readFileSync('webpage.html');
const about=fs.readFileSync('about.html');
const contacts=fs.readFileSync('contacts.html');
const services=fs.readFileSync('services.html');
//Creating HTTP Server
const server=http.createServer((req,res)=>{
    let url=req.url;
    // res.statusCode=200;
    // res.writeHead(200,{'Content-type':'text/html'});
    if(url=='/')
    {
    res.end(home);
    }
    else if(url=='/about'){
        res.end(about);  
    }
    else if(url=='/contacts'){
        res.end(contacts);
    }
    else if(url=='/services'){
        res.end(services);
    }
    else
    {
    statusCode=404;
    res.end("<h1>404 Page Not Found</h1>")
    }

})
//Listening to the PORT
server.listen(8000,()=>{
    console.log("Server is running at PORT:8000")
})
