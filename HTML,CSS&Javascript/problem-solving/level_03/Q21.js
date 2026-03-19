//by inbuilt method
var num;
function dig(num) {
    var num = String(Math.abs(num)).split("").length;
    console.log(num);
}

dig(52);

//for problem solving 
let n = 25342;

let count = 0;
while (n > 0) {
    count++;
    n = Math.floor(n / 10);
}
console.log(count);