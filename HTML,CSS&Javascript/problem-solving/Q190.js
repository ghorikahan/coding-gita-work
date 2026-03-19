function kthLargest(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            for (let j = i + 1; j > 0; j--) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            }
        }
    }
    console.log(arr[(arr.length + 1) - k]);
}

kthLargest([7, 10, 4, 3, 20, 15], 2);