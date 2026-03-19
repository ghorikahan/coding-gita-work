let arr = [1, 2, 3, 2, 1, 2, 3, 4, 5, 6, 4, 3];

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

let max = 0;
let maxFreqency=0;
for (let char in obj) {
    if (obj[char] > maxFreqency) {
        max = char;
        maxFreqency=obj[char];
    }
}
console.log(max);