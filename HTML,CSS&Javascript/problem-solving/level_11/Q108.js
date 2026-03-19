// function str(strName) {
//     return strName.length > 5 ? true : false;
// }
// console.log(str("kahan"));

function str(strName) {
    strNew = strName.split("");
    var count = 0;
    for (let i = 0; i < strNew.length; i++) {
        count++;
    }
    return count>5 ? true:false
}
console.log(str("kahan"));