let r = ""
require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x => {
    const j = x.trim().split(" ");
    const a = +j[0]
    const b = +j[1]
    if (a !== 0 && b !== 0) r += ((a + b) + "\n");
});

console.log(r)