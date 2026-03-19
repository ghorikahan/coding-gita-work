function maxSubArr(arr, k) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j <= i + k - 1; j++) {
            sum = sum + arr[j];
        }
        if (sum > max) {
            max = sum;
        }
    }
    console.log(max);
}

maxSubArr([1, 2, -3, 4], 4);