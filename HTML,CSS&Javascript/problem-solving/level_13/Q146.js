let str = "kahan?";
let newStr = str.split("");

for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] == "?") {
        newStr[i] = "!";
    }
}

console.log(newStr.join(""));