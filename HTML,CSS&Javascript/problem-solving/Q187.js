function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let max = -Infinity;
        let index = 0;
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > max) {
                max = arr[j];
                index = j;
            }
        }
        [arr[index], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[index]];
    }
    console.log(arr);
}

selectionSort([1, 3, 2, 5, 4]);