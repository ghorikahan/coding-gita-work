var arr = [1, 2, 3, 4];
var arr1 = [1, 3, 2, 5];

let res = [];
let i = 0;
let j = 0;

while (i < arr.length && j < arr1.length) {
    if (arr[i] == arr1[j]) {
        res.push(arr[i]);
        i++;
        j++;
    }
    else if (arr[i] > arr[j]) {
        i++;
    }
    else {
        j++;
    }
}
console.log(res);