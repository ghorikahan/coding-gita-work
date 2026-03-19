let n = 12345;
var sum = 0;
while (n > 0) {
    let check = n % 10;
    sum = sum + check;
    n = Math.floor(n / 10);
}
console.log(sum);