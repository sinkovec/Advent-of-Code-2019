let fs = require('fs')
    path = require('path')
    filePath = path.join(__dirname, 'input'),
    { setParameters, processData } = require('./util');

let originalData = fs.readFileSync(filePath).toString().split(',').map(Number);
let noun = 12, verb = 2;
let result = 1;
const output = 19690720;
while (output / result > 1) {
    noun++;
    data = setParameters(originalData, noun, verb);
    result = processData(data);
}
noun--;
while (output != result) {
    verb++;
    data = setParameters(originalData, noun, verb);
    result = processData(data);
}
console.log(`noun: ${noun}, verb: ${verb}, result: ${result}, ${result == output}, answer: ${100 * noun + verb}`);