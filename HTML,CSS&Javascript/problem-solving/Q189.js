function bubbleSort(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
    }

    console.log(arr[k-1]);
}
bubbleSort([7, 10, 4, 3, 20, 25], 3);