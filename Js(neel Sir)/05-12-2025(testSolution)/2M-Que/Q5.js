var arr = [1, 2, 3, 4, 5, 6];
var evenArr = [], count = 0, sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
        evenArr.push(arr[i]);
        count++;
        sum = sum + arr[i];
    }
}

console.log("New even array is :" + evenArr);
console.log("Total even count is :" + count);
console.log("Sum of even number is :" + sum);