function greaterThanK(arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > k) {
            count++;
        }
    }
    console.log(count);
}

greaterThanK([1, 5, 3, 9, 8, 5], 5);