function maxIndex(arr) {
    let maxValue = arr[0];
    let maxIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxIndex = i;
        }
    }

    console.log(maxIndex);
}

maxIndex([1, 2, 3, 4, 5]);