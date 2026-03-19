function largestNum(num) {
    var newNum = num.toString().split("");
    var max = newNum[0];
    for (let i = 0; i < newNum.length; i++) {
        if (max < newNum[i]) {
            max = newNum[i];
        }
    }
    console.log(max);
}

// function m2LargestNum(n){
//     let max = 0;
//     while(n>0){
//         max = Math.max(max,n%10);
//         n = Math.floor(n/10);
//     }
//     console.log(max);
// }

largestNum(5214232139);