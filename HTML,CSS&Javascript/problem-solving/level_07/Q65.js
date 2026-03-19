var arr = [1, 2, 3];
console.log(arr.includes(3));


for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 2) {
        console.log("present");
        return;
    }
}

console.log("not present");