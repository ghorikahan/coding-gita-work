function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            for (let j = i + 1; j >= 0; j--) {
                if (arr[j] < arr[j - 1]) {
                    [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                }
                else {
                    break;
                }
            }
        }
    }
    console.log(arr);
}

insertionSort([7, 10, 4, 3, 20, 15]);