const fs = require('fs');

function write()
{
    fs.writeFile('file.txt', "Ram Ram", () => {
        console.log("Data Written !");
    });
}

function read()
{
    fs.readFile('file.txt', (err, data) => {
        if(err)
        {
            console.log("Error : " + err);
        }
        console.log(data.toString());
    });
}

function append()
{
    fs.appendFile('file.txt', "Appending Data ...", () => {
        console.log("Data Appended !");
    });
}

function unlinkf()
{
    fs.unlink('file.txt', () => {
        console.log("File Deleted !");
    });
}

const obj = {
    read : read,
    write : write,
    append : append,
    unlinkf : unlinkf
}

module.exports = obj;