const val = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let r = ""
for (let i = 1; i <= val; i++) {
    r *= i
}
console.log(r)