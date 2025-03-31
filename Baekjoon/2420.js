const i = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const a = +i[0];
const b = +i[1];
let r = 0
a < 0 ? r += -a : r += a
r += b
console.log(r)