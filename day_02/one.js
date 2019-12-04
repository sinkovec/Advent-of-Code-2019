let fs = require('fs')
    path = require('path')
    filePath = path.join(__dirname, 'input'),
    { setParameters, processData } = require('./util');

let data = fs.readFileSync(filePath)
             .toString()
             .split(',')
             .map(Number);

data = setParameters(data, 12, 2);
console.log(processData(data));