// Q-19
// function factorial(n) {
//     let pro = 1;
//     for (let i = n; i > 1; i--) {
//         pro = pro * i;
//     }
//     console.log(pro);
// }

// factorial(5);



// Q-48
// function removeVowel(str) {


//     var obj = {
//         'a': 1,
//         'e': 1,
//         'i': 1,
//         'o': 1,
//         'u': 1,
//         'A': 1,
//         'E': 1,
//         'I': 1,
//         'O': 1,
//         'U': 1
//     }
//     let res = [];
//     for (let i = 0; i < str.length; i++) {
//         if (obj[str[i]] == undefined) {
//             res.push(str[i]);
//         }
//         else {
//             continue;
//         }
//     }
//     console.log(res.join(""));
// }

// removeVowel("hello");

// Q-50

// function toggle(str) {

//     let newStr = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= 'A' && str[i] <= 'Z') {
//             newStr = newStr + str[i].toLowerCase();
//         }
//         else {
//             newStr = newStr + str[i].toUpperCase();
//         }
//     }

//     console.log(newStr);
// }

// toggle("Kahan");



function countVowels(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 65 && str[i] <= 90) {
            newStr = newStr + str[i].toUpperCase();
        }
    }

}

countVowels("kahan");

