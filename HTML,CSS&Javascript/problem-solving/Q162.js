function tripleNum(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 3;
    }
    console.log(arr);
}

tripleNum([1, 2, 3])