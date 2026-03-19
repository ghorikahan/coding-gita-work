let f = 12;
let s = 10;

var min = Math.min(f, s);

for (let i = min; i >= 1; i--) {
    if (f % i == 0 && s % i == 0) {
        console.log(i);
        break;
    }
}

