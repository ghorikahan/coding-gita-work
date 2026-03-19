var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var res = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        res.push(arr[i]);
    }
}

console.log(res);

//m-2.

var res2 = arr.filter((value) => {
    return value%2!=0;
})

console.log(res2);