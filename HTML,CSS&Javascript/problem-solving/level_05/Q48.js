// var str = "JavaScript";

// for (let i = 0; i < str.length; i++) {
//     if (str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U' || str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {

//     }
// }
// var a = "abcd123";
// var count = 0;
// count = 0;
// for (let i = 0; i < a.length; i++) {
//     if (a[i].charCodeAt() >= 48 && a[i].charCodeAt() <= 57) {
//         count++;
//     }
// }
// console.log("ASCII method:", count);



function removeVowels(str) {
    var obj = {
        'a': 1,
        'e': 1,
        'i': 1,
        'o': 1,
        'u': 1,
    }
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] == undefined) {
            res = res + str[i];
        }

    }
    console.log(res);
}
removeVowels("kahan");










count = 0;
var digits = "0123456789";
for (let i = 0; i < a.length; i++) {
    if (digits.includes(a[i])) {
        count++;
    }
}
console.log("includes method:", count);















var removed = a.replaceAll(/[0-9]/g, "");
var count = a.length - removed.length;
console.log("replaceAll method:", count);














count = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] >= "0" && a[i] <= "9") {
        count++;
    } else {
        // not a digit
    }
}
console.log("if-else method:", count);














count = 0;
var digitObj = {
    "0": true, "1": true, "2": true, "3": true, "4": true,
    "5": true, "6": true, "7": true, "8": true, "9": true
};
for (let i = 0; i < a.length; i++) {
    if (digitObj[a[i]]) {
        count++;
    }
}
console.log("object method:", count);






// Method obj.
var str = "this is a problem solving class";
var res = "";
var obj = {
    A: 1,
    a: 1,
    E: 1,
    e: 1,
    I: 1,
    i: 1,
    O: 1,
    o: 1,
    U: 1,
    u: 1,
}

for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] == undefined) {
        console.log(str[i]);
    }
}