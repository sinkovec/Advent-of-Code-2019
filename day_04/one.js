var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'input');

const range = fs.readFileSync(filePath)
                .toString()
                .split('-')
                .map(Number);

let possiblePasswds = []
for (let i = range[0]; i <= range[1]; i++) {
    const digits = getDigits(i);
    let greater = true;
    let adjacent = false;
    for (let j = 0; j < digits.length - 1; j++) {
        if (digits[j] < digits[j+1]) {
            greater = false;
        }
        if (digits[j] === digits[j+1]) {
            adjacent = true;
        }
    }
    if (greater && adjacent) {
        possiblePasswds.push(i);
    }
}

console.log(possiblePasswds.length)

function getDigits(number) {
    let result = [];
    let lastDigit = 0;
    while (number > 0) {
        lastDigit = number % 10;
        number = Math.floor(number / 10);
        result.push(lastDigit);
    }
    return result
}