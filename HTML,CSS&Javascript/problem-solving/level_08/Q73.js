var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];
// m-1.
let res = [...arr1,...arr2];
console.log(res);

// m-2.
const res2 = arr.concat(arr2);
console.log(res2);

let res3 = [];

// m-3.
for (let i = 0; i < arr1.length; i++) {
    res3.push(arr1[i]);
}
for (let i = 0; i < arr1.length; i++) {
    res3.push(arr2[i]);
}

console.log(res3);