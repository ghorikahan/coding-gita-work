let str = "kAhaN";
// console.log(str.toLowerCase());
let res = "";
for (let i = 0; i < str.length; i++) {

    let value = str.charCodeAt(i);

    if (value >= 65 && value <= 90) {
        res = res + String.fromCharCode(value + 32);
    }

    else {
        res = res + str[i];
    }

}
console.log(res);