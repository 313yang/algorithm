const i = require('fs').readFileSync('/dev/stdin').toString().split(' ');
console.log(i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0) ? 1 : 0);