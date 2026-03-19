// let str = "javascript";

// let count = 0;

// let arr = str.split("");

// arr.forEach((char) => {
//     if (char == "a" || char == "A") {
//         count++;
//     }
// })
// console.log(count);

// for (let i = 0; i < str.length; i++) {
//     if (str[i] == "a" || str[i] == "A") {
//         count++;
//     }
// }

// console.log(count);



function Occurrences(str) {
    let newStr = "";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a') {
            count++;
        }
    }
    console.log(count);
}

Occurrences("kahan")