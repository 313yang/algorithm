const input = require('fs').readFileSync('/dev/stdin').toString()
for (let i = 1; i < 10; i++) {
    console.log(+input, "*", i, "=", +input*i) // 출력 형식이 숫자이어야함.
}