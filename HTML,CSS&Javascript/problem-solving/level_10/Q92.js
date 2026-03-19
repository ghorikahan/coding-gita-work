let arr = "This is the problem solving class";

let obj = {};

for (let char of arr) {
    if (obj[char] == undefined) {
        obj[char] = 1;
    }
    else {
        obj[char]++;
    }
}

console.log(obj);