function tripleNum(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.abs(arr[i]);
    }
    console.log(arr);
}

tripleNum([1, 2, -3]);