let arr = [1, 2, 3, 4, 5];
var min = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log("minimumn is:", min);