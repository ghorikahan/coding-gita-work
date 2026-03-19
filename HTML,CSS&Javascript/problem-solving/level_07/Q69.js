function smin(arr) {
    let min = arr[0];
    let smin = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > min && arr[i] < smin) {
            smin = arr[i];
        }
    }
    console.log(smin);
}

smin([10, 5, 8, 20]);