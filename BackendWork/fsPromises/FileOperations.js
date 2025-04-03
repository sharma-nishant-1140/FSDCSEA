const promise = require('fs').promises;
const fsp = promise.writeFile('file.txt', "Promise Write ...");
// console.log(fsp);

fsp.then(() => {
    console.log('Data Written !');
}).catch((err) => {
    console.log('Error : ' + err);
}).finally(() => {
    console.log('ALL RESOURSES ARE FREE !');
});

async function readFileAsync()
{
    const data = await promise.readFile('file.txt');
    console.log(data.toString());
}

readFileAsync();
