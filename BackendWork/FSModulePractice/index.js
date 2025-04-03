const {dataCopy, readFileAsync} = require('./FileOperations.js');

(async () => {
    const data1 = await readFileAsync('StudentData.json');

    if (data1) await dataCopy(data1);

    const data2 = await readFileAsync('UpdatedStudentData.json');
    if (data2) await dataCopy(data2);
})();