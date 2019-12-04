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
    let occurences = {};
    for (let j = 0; j < digits.length - 1; j++) {
        const currentDigit = digits[j],
              nextDigit = digits[j+1];
        if (currentDigit < nextDigit) {
            greater = false;
            break;
        }
        if (currentDigit in occurences) {
            occurences[currentDigit] += 1;
        } else {
            occurences[currentDigit] = 1;
        }
    }
    let lastDigit = digits[digits.length - 1];
    if (lastDigit in occurences) {
        occurences[lastDigit] += 1;
    } else {
        occurences[lastDigit] = 1;
    }
    if (greater) {
        const twoDigits = Object.values(occurences).includes(2);
        if (twoDigits) {
            possiblePasswds.push(i);
        }
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