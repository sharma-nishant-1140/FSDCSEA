// const {sum, multiplication} = require('./logic');
// const result = sum(12, 10);
// console.log("Sum " + result);
// const result1 = multiplication(12, 10);
// console.log("Multiplication " + result1);

const {dataWrite, dataAppend, dataRead, fileDelete} = require('./UseFileSync/FileOperations');
const data = "Jai Shree Ram ";
dataWrite(data);
dataRead();
dataAppend(data);
dataRead();
fileDelete();
console.log("All Operations Performed !!!");