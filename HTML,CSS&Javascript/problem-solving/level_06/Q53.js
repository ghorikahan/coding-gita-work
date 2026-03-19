let arr = [1, 2, 3, 4, 5];

var max = arr[0];
var min = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log("maximum is:", max);
console.log("minimumn is:", min);