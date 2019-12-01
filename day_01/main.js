var fs = require('fs'),
    readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('input')
  });

function calculateFuel(mass) {
    return Math.floor(mass / 3) - 2
}

var totalFuelRequired = 0;
rl.on('line', (line) => {
    var mass = parseInt(line);
    var fuelRequired = 0;
    while ((fuelRequired = calculateFuel(mass)) > 0) {
        totalFuelRequired += fuelRequired;
        mass = fuelRequired;
    }
});

rl.on('close', () => {
    console.log(`Total fuel required: ${totalFuelRequired}`);
});