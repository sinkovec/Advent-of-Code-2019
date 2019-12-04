let fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'input');

const fuelRequired = fs.readFileSync(filePath)
                       .toString()
                       .split('\n')
                       .map(Number)
                       .reduce((a,b) => a+b, 0);

console.log(`Fuel required: ${fuelRequired}`);