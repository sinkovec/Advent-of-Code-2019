var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'input');

const data = fs.readFileSync(filePath)
               .toString()
               .split('\n');

const youPath = pathFromComTo('YOU'),
      sanPath = pathFromComTo('SAN');

while(youPath[0] == sanPath[0]) {
    youPath.shift();
    sanPath.shift();
}

console.log(youPath.length + sanPath.length - 2);

function pathFromComTo(node) {
    let result = [node];
    let current = node;
    while (current != 'COM') {
        const next = data.map(e => e.split(')'))
                         .filter(e => e[1] == current)
                         .map(e => e[0])[0];
        result.unshift(next);
        current = next;
    }
    return result;
}