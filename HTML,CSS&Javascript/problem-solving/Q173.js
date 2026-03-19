function unique(arr) {
    let i = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] < 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    console.log(arr);
}

unique([1, -2, 3, -4, 0]);