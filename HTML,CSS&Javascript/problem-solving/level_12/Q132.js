// function smallestNum(num) {
//     var newNum = num.toString().split("");
//     var min = newNum[0];
//     for (let i = 0; i < newNum.length; i++) {
//         if (min > newNum[i]) {
//             min = newNum[i];
//         }
//     }
//     console.log(min);
// }

function m2SmallestNum(n){
    let min = 9;
    while(n>0){
        min = Math.min(min,n%10);
        n = Math.floor(n/10);
    }
    console.log(min);
}
m2SmallestNum(5214);