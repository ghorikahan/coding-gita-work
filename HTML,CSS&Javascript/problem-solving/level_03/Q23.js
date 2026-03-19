let n = 12345;
var pro = 1;
while (n > 0) {
    let check = n % 10;
    pro = pro * check;
    n = Math.floor(n / 10);
}
console.log(pro);