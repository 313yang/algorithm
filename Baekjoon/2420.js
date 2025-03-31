const i = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const a = +i[0];
const b = +i[1];
console.log(Math.abs(a - b))