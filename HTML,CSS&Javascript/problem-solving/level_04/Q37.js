let str = "kahan";


// let str = "kahan";
// let rev = str.split("");
// rev.reverse();                    // by inbuilt method...
// let newrev = rev.join("");
// console.log(newrev);


let new_str = str.split("").reverse().join("");

console.log(new_str);

let res = " ";

for (i = str.length - 1; i >= 0; i--) {
    res = res + str[i];
}

console.log(res);
















// function reverseStr(str){
//     let newStr = str.split("").reverse().join("");
//     let res = "";
//     for (let i = 0; i < newStr.length; i++) {
//         res = res + newStr[i];
//     }
//     console.log(res);
// }
// reverseStr("hello");