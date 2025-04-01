const input = require('fs').readFileSync("/dev/stdin").toString();
let r = ""

for (let i = 1; i <= +input; i++) {
    r += ("*".repeat(i) + "\n")
}
console.log(r)