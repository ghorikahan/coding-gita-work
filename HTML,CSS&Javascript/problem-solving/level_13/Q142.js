let str = "kahan";
let newStr = str.split("");

if (newStr.shift() == "a" || newStr.shift() == "A") {
    console.log(true);
}
else {
    console.log(false);
}