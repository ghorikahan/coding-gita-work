// var str = "abc123";
// var str2 = "1234567890";
// var res = [];


// for (let i = 0; i < str.length; i++) {
//     if (str2.includes(str[i]));
//     else {
//         res.push(str[i]);
//     }
// }

// res = res.join("");
// console.log(res);


// // method - 2(using ibj).
// var str = "abc 123 basd";
// var res = "";
// var obj = {
//     0: 1,
//     1: 1,
//     2: 1,
//     3: 1,
//     4: 1,
//     5: 1,
//     6: 1,
//     7: 1,
//     8: 1,
//     9: 1
// }

// for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]] == undefined) {
//         res = res + str[i];
//     }
// }

// console.log(res);







function removedigits(str) {
    var obj = {
        "1": 1,
        "2": 1,
        "3": 1,
        "4": 1,
        "5": 1,
        "6": 1,
        "7": 1,
        "8": 1,
        "9": 1,
        "0": 1,
    }
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] == undefined) {
            res = res + str[i];
        }

    }
    console.log(res);
}

removedigits("abc123");