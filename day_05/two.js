var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'input');

const data = fs.readFileSync(filePath)
                .toString()
                .split(',')
                .map(Number);

let i = 0;
while (i < data.length && data[i] != 99) {
    const instruction = data[i].toString().padStart(5, '0');
    
    const opcode = Number(instruction.slice(4)),
          paramModes = instruction.slice(0,3).split('').map(Number).reverse();

    const param1 = paramModes[0] === 0 ? data[data[i+1]] : data[i+1],
          param2 = paramModes[1] === 0 ? data[data[i+2]] : data[i+2],
          param3 = data[i+3]; // can't be immedite mode
    
    switch (opcode) {
        case 1: data[param3] = param1 + param2;           i += 4; break;
        case 2: data[param3] = param1 * param2;           i += 4; break;
        case 3: data[data[i+1]] = 5;                      i += 2; break;
        case 4: console.log(param1);                      i += 2; break;
        case 5: if (param1 !== 0) i = param2;        else i += 3; break;
        case 6: if (param1 === 0) i = param2;        else i += 3; break;
        case 7: data[param3] = param1 < param2 ? 1 : 0;   i += 4; break;
        case 8: data[param3] = param1 === param2 ? 1 : 0; i += 4; break;
        default: console.log(`Unkown opcode: ${opcode}`);
    }
}