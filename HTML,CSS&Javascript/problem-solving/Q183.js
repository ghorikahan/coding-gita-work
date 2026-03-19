function rotateByK(arr, k) {
    let res = [];
    let n = arr.length;
    if (k > n) {
        k = k % n;
    }
    for (let i = arr.length - k; i < arr.length; i++) {
        res.push(arr[i]);
    }
    // for (let i = 0; i < arr.length - k; i++) {
    //     res.push(arr[i])
    // }
    console.log(res);
}

rotateByK([1, 2, 3, 4, 5], 2);


