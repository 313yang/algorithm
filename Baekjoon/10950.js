let r = []
require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x => {
    const j = x.trim().split(" ");
    if (j.length > 1) r.push(+j[0] + +j[1]);
});

r.map(x=>console.log(x))
