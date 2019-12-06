var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'input');

const data = fs.readFileSync(filePath)
               .toString()
               .split('\n');

const queue = ['COM'];
let sum = 0;
let layer = 1;

while (queue.length != 0) {
    const next = [];
    while (queue.length != 0) {
        const current = queue.shift();
        const succ = data.map(e => e.split(')'))
                         .filter(e => e[0] == current)
                         .map(e => e[1]);
        next.push(...succ);
    }
    queue.push(...next);
    sum += queue.length * layer++;
}

console.log(sum);