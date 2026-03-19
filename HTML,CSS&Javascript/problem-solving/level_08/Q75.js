let arr = [4,1,2,3];
// m-1.
let res = [arr[arr.length-1]];

for(let i=0;i<arr.length;i++){
    res.push(arr[i]);
}

console.log(res);

// m-2.

let add = arr.pop();
arr.unshift(add);
console.log(arr);


// m-3.
let temp = arr[arr.length-1];

for(let i =arr.length;i>0;i--){
    arr[i] = arr[i-1];
}

arr[0] = temp;
console.log(arr);