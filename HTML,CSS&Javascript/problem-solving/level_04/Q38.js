let str = "malayalam";

let i = 0;
let j = str.length - 1;

while (i <= j) {
    if (str[i] != str[j]) {
        console.log("string is not a pallindrome");
        return;
    }
    i++;
    j--;
}

console.log("string is pallindrome");




// function pallindrome(str) {
//     let i = 0;
//     let j = str.length - 1;
//     while (i <= j) {
//         if (str[i] != str[j]) {
//             console.log(" not a pallindrome number");
//             return;
//         }

//         i++;
//         j--;

//     }
//     console.log("pallindrome number");
// }

// pallindrome("malayalam");