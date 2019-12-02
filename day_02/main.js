var fs = require('fs')
    path = require('path')
    filePath = path.join(__dirname, 'input');

// part one
var data = fs.readFileSync(filePath).toString().split(',').map(Number);
data = setParameters(data, 12, 2);
console.log(processData(data));

// part two
var originalData = fs.readFileSync(filePath).toString().split(',').map(Number);
var noun = 12, verb = 2;
var result = 1;
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

function setParameters(data, noun, verb) {
    newData = data.slice();
    newData[1] = noun;
    newData[2] = verb;
    return newData;
}

function processData(data) {
    for (var i = 0; i < data.length && data[i] != 99; i += 4) {
        const opcode = data[i],
              j = data[i+1],
              k = data[i+2],
              l = data[i+3];
    
        if (opcode === 1) {
            data[l] = data[j] + data[k];
        } else if (opcode == 2) {
            data[l] = data[j] * data[k];
        } else {
            console.log(`Unkown opcode: ${opcode}`);
        }
    }
    return data[0];
}