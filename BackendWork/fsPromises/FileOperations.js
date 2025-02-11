const promise = require('fs').promises;
const fsp = promise.writeFile('file.txt', "Promise Write ...");
// console.log(fsp);

fsp.then(() => {
    console.log('Data Written !');
}).catch((err) => {
    console.log('Error : ' + err);
}).finally(() => {

})