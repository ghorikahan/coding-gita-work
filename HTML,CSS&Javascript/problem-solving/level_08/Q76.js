let arr = [1, 2, 3, 4, 5];
// m-1.
let add = arr.shift();

arr.push(add);
console.log(arr);

// m-2.
let res = [];
let temp = arr[0];
for(let i=1;i<arr.length;i++){
    res.push(arr[i]);
}


res.push(temp);
console.log(res);