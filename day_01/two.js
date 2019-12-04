let fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'input');

const fuelRequired = fs.readFileSync(filePath)
                       .toString()
                       .split('\n')
                       .map(Number)
                       .reduce((a,b) => a + fuelRequiredRecursive(b), 0);

console.log(`Fuel required: ${fuelRequired}`);

function fuelRequiredRecursive(mass) {
    const result = Math.floor(mass / 3) - 2;
    if (result <= 0) {
        return 0;
    }
    return result + fuelRequiredRecursive(result);
}