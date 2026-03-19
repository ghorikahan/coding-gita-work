var arr = [1, 2, 3, 4, 5];
var value = 5;
let res = arr.indexOf(value);

let res2 = 0;

for (let i = 0; i < array.length; i++) {
    if (arr[i] == value) {
        console.log(true);
        res2 = i;
        break;
    }
}

console.log(res);
console.log(res2);