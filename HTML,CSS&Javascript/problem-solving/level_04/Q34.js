let str = "hello";
let count = 0;
for (let char of str) {
    if (char != "a" && char != "e" && char != "i" && char != "o" && char != "u") {
        console.log(char);
        count++;
    }
}

console.log(count);