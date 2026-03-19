// var str = "HeLlO";

// let count = 0;

// for (let i = 0; i <= str.length; i++) {
//     if (str[i] >= "A" && str[i] <= "Z") {
//         // console.log(str[i]);
//         count++;
//     }
// }

// let count2 = 0;


// for (let i = 0; i <= str.length; i++) {
//     if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
//         // console.log(str[i]);
//         count2++;
//     }
// }

// let count3 = 0;
// for (let i = 0; i < str.length; i++) {
//     let check = str[i].toUpperCase;

//     if (check == str[i]) {
//         count3++;
//     }
// }
// console.log(count);
// console.log(count2);
// console.log(count3);



function countUppercase(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            count++;
        }
    }
    console.log(count);
}
countUppercase("KaHaN");