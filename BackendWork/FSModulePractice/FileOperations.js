const fs = require('fs').promises;

async function dataCopy(data) {
    try {
        await fs.writeFile('UpdatedStudentData.json', data);
        console.log('Data Written in File : UpdatedStudentData.json!');
    } catch (err) {
        console.log('Error:', err);
    } finally {
        console.log('---------- DATA TRANSFERRED SUCCESSFULLY ----------');
    }
}

async function readFileAsync(filePath) {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        return data;
    } catch (err) {
        console.log('Error reading file:', err);
        return null;
    }
}

(async () => {
    const data1 = await readFileAsync('StudentData.json');

    if (data1) await dataCopy(data1);

    const data2 = await readFileAsync('UpdatedStudentData.json');
    if (data2) await dataCopy(data2);
})();

module.exports = {dataCopy, readFileAsync};