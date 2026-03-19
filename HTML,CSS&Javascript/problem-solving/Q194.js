function triplet(arr, sum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; i++) {
                if (arr[i] + arr[j] + arr[k] == sum) {
                    console.log(i, j, k);
                    return true;
                }
            }
        }
    }
}

console.log(triplet([1, 2, 3, 4, 5], 9));