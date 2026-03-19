let arr = [1,2,5,4,8,6,3,7];

let even = arr.filter((value)=>{
    return value%2==0;
})

let odd = arr.filter((value)=>{
    return value%2!=0;
})


console.log(even);
console.log(odd);