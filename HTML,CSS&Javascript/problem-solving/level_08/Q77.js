let arr = [1,7,3,2,5,2,10,8,9];

// m-1.
let sum=0;
for(let i=0;i<arr.length;i++){
    sum = sum + arr[i];
}

let avg = sum/arr.length;
let newArr = [];
for(let i=0;i<arr.length;i++){
    if(arr[i]>avg){
        newArr.push(arr[i]);
    }
}

console.log(newArr);
console.log(avg);

// m-2.

let arr1 = [10, 1, 8, 3, 2, 4, 11, 19, 18];

let average = arr1.reduce((accumulator, value) => {
    return accumulator + value;
});

average = average / arr1.length;

let count = 0;

arr1.forEach((value) => {
    value > average ? count++ : "";
});

console.log(count);
