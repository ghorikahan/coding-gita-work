function square(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] * arr[i]);
    }
    console.log(res);
}
square([1, 2, 3]);