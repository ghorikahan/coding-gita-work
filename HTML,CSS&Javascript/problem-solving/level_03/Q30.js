let a = 15;
let b = 10;

let max = Math.max(a, b);

for (let i = max; i <= a * b; i++) {
    if (i % a == 0 && i % b == 0) {
        console.log(i);
        break;
    }
}
