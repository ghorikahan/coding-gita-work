let arr = [0,1,0,1,1,0];

let zero = 0;
let ones = 0;

for (let i = 0; i < arr.length; i++) {
    if(arr[i]==0){
        zero++;
    }
    else if(arr[i]==1){
        ones++;
    }
}

console.log("zeros are:"+zero);
console.log("one are:"+ones);