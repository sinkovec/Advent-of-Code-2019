var fs = require('fs')
    path = require('path')
    filePath = path.join(__dirname, 'input');

const data = fs.readFileSync(filePath).toString().split('\n');
const wire1 = data[0].split(','), wire2 = data[1].split(',');
// const wire1 = "R75,D30,R83,U83,L12,D49,R71,U7,L72".split(',');
// const wire2 = "U62,R66,U55,R34,D71,R55,D58,R83".split(',');
// const wire1 = "R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51".split(',');
// const wire2 = "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7".split(',');

const visitPoints1 = getVisitedPoints(wire1);
const visitPoints2 = [...getVisitedPoints(wire2)];
const minDistance = visitPoints2.filter(e => visitPoints1.has(e))
                                .map(e => e.split(',').map(Number))
                                .map(([x,y]) => Math.abs(x) + Math.abs(y))
                                .sort((a,b) => a - b);

console.log(minDistance);

function getVisitedPoints(wire) {
    var result = new Set();
    var position = {x: 0, y: 0};
    for (const element of wire) {
        const dir = element.charAt(0), steps = Number(element.slice(1));
        for (var i = 0; i < steps; i++) {
            position.x += dir === 'R' ? 1 : dir === 'L' ? -1 : 0;
            position.y += dir === 'U' ? 1 : dir === 'D' ? -1 : 0;
            result.add(`${position.x},${position.y}`);
        }
    }
    return result;
}