function unique(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let have = true;
        for (let j = 0; j < res.length; j++) {
            if (arr[i] == res[j]) {
                have = false;
            }
        }
        if (have) {
            res.push(arr[i]);
        }
    }
    console.log(res);
}

unique([1, 2, 2, 3, 3, 3]);