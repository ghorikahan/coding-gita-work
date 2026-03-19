function maxSum(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; i++) {
            sum = sum + arr[j];
            if (sum > max) {
                max = sum;
            }
        }
    }
    console.log(max);
}

maxSum([1, -2, 3, 4, -1]);