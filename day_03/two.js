var fs = require('fs')
    path = require('path')
    filePath = path.join(__dirname, 'input');

const data = fs.readFileSync(filePath).toString().split('\n');
const wire1 = data[0].split(','), 
      wire2 = data[1].split(',');

const visitPoints1 = getVisitedPoints(wire1);
const visitPoints2 = getVisitedPoints(wire2);
const minDistance = Object.keys(visitPoints2)
                          .filter(e => e in visitPoints1)
                          .map(e => visitPoints1[e] + visitPoints2[e])
                          .sort((a,b) => a - b)[0];

console.log(minDistance);

function getVisitedPoints(wire) {
    var result = {};
    var position = {x: 0, y: 0};
    var totalSteps = 0;
    for (const element of wire) {
        const dir = element.charAt(0), steps = Number(element.slice(1));
        for (var i = 0; i < steps; i++) {
            position.x += dir === 'L' ? -1 : dir === 'R' ? 1 : 0;
            position.y += dir === 'D' ? -1 : dir === 'U' ? 1 : 0;
            const posStr = `${position.x},${position.y}`;
            totalSteps++;
            if (!(posStr in result)) {
                result[posStr] = totalSteps;
            }
        }
    }
    return result;
}