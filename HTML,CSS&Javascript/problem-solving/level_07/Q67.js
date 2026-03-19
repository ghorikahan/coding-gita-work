function freqVAL(arr, val) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            count++;
        }
    }

    console.log(count);
}

freqVAL([1, 2, 2, 3, 2], 2);