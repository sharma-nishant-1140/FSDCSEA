const fs = require('fs').promises;
const http = require('http');
const PORT = 5000;
const server = http.createServer(async(request, response) => {
    // try{
    //     response.setHeader('Content-Type', 'text/html');
    //     response.write("Welcome to HTTP and FS module");
    //     const data = await fs.readFile('student.json', {encoding : 'utf-8'});
    //     response.write(data);
    //     response.end("---------------------------------------------------------------");
    // }
    // catch(err)
    // {
    //     console.log("Error while reading student.json !" + err);
    // }

    try{
        if(request.url == "/home" && request.method == "GET")
        {
            response.setHeader('Content-Type', 'text/html');
            const htmldata = await fs.readFile('home.html');
            response.write(htmldata);
            response.end();
        }
        else if(request.url == '/textdata' && request.method == 'GET'){
            response.setHeader('Content-Type', 'text/html');
            const content = await fs.readFile('student.txt', {encoding : 'utf-8'});
            response.end(content);
        }
        else{
            response.setHeader('Content-Type', 'text/html');
            const errfile = await fs.readFile('error.html');
            response.end(errfile);
        }
    }
    catch(err)
    {
        console.log("Error : " + err);
    }
});

server.listen(PORT, () => {
    console.log("Server is running on : " + PORT);
});