function evenInd(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            res.push(arr[i]);
        }
    }
    console.log(res);
}

evenInd([1, 2, 3, 4, 5]);