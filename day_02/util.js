module.exports = { setParameters, processData };

function setParameters(data, noun, verb) {
    newData = data.slice();
    newData[1] = noun;
    newData[2] = verb;
    return newData;
}

function processData(data) {
    for (let i = 0; i < data.length && data[i] != 99; i += 4) {
        const opcode = data[i],
              j = data[i+1],
              k = data[i+2],
              l = data[i+3];
    
        if (opcode === 1) {
            data[l] = data[j] + data[k];
        } else if (opcode === 2) {
            data[l] = data[j] * data[k];
        } else {
            console.log(`Unkown opcode: ${opcode}`);
        }
    }
    return data[0];
}