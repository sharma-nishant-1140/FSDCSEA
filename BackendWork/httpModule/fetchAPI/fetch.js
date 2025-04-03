const http = require('http');
const PORT = 5100;
const server = http.createServer(async(req,res) => {
    try{
        res.setHeader('Content-Type', 'text/html');
        const data = await fetch('https://fakestoreapi.com/products');
        const jsondata = await data.json();
        // res.end(jsondata[0].title);

        for(let i = 0; i < 10; i++)
        {
            const htmltemplate = `<html>
                <body>  
                    <div>
                        <img src=${jsondata[i].image} height=200px width=200px>
                        ${jsondata[i].category}
                        </img>
                    </div>
                </body>
            </html>`

            res.write(htmltemplate);
        }

    }
    catch(err)
    {
        console.log("Error : " + err);
    }
});

server.listen(PORT, () => {
    console.log("SERVER RUNNING AT PORT : " + PORT);
});