// let str = "hello everyone i am ghori kahan";

// let res = "";

// for (let i = 0; i < str.length; i++) {
//     if (str[i] == " ") {
//         continue;
//     }
//     res = res + str[i];
// }
// console.log(res);





function removeSpace(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            continue;
        }
        res = res + str[i];
    }

    console.log(res);
}

removeSpace("k    a   h  a      n")