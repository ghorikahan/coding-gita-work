// var str = "coding gita 123";
// var str2 = "1234567890";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str2.includes(str[i])) {
//         count++;
//     }
// }
// console.log(count);
// for (let i = 0; i < str.length; i++) {
//     if (str[i] >= 0 && str[i] <= 9 && str[i] != " ") {
//         count++;
//     }
// }
// console.log(count);











function countDigits(str){
    var obj = {
        "1" : 1,
        "2" : 1,
        "3" : 1,
        "4" : 1,
        "5" : 1,
        "6" : 1,
        "7" : 1,
        "8" : 1,
        "9" : 1,
        "0" : 1,
    }
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        if(obj[str[i]]==undefined){
            continue;
        }
        count++;
    }
    console.log(count);
}

countDigits("abc123");