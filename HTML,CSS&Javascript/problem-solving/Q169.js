function minIndex(arr) {
    let minValue = arr[0];
    let minIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minIndex = i;
        }
    }
    console.log(minIndex);
}
minIndex([-1, 2, 0, 5, 9, -9]);