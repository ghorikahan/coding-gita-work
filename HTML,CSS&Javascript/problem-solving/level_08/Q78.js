let arr = [2,-4,1,-3,5];

// m-1.

let max = Math.max(...arr);
let min = Math.min(...arr);

console.log(max>0 ? max:null);
console.log(min<0 ? min:null);


// m-2.
let min = 0;
let max = 0;

for (let i = 0; i < array.length; i++) {
   if(arr[i]>max){
    max = arr[i];
   }
   if(arr[i]<min){
    min = arr[i];
   }
}

console.log(max>0 ? max:null);
console.log(min>0 ? min:null);