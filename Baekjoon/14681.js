const [x, y] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(Number);

if (x > 0)
    y > 0 ? console.log(1) : console.log(4)

else if (x < 0)
    y > 0 ? console.log(2) : console.log(3)

