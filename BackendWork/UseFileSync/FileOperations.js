const fs = require("fs");

function dataWrite(data)
{
    try{
        fs.writeFileSync("data.txt", data);
        console.log("Data written successfully !");
    }
    catch(err)
    {
        console.log("Error : " + err);
    }
}

function dataRead()
{
    const read = fs.readFileSync("data.txt", {encoding : 'utf-8'});
    console.log(read);
}

function dataAppend(data)
{
    fs.appendFileSync('data.txt', data);
    console.log("Data Appended Successfully !");
}

function fileDelete()
{
    fs.unlinkSync('data.txt');
    console.log("File Deleted successfully !");
}

const obj = {
    dataWrite : dataWrite,
    dataAppend : dataAppend,
    dataRead : dataRead,
    fileDelete : fileDelete
}

module.exports = obj;