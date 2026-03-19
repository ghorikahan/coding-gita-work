function countOccurance(arr, k) {
    let right = null;
    let left = null;
    let i = 0;
    let j = arr.length - 1;

    while (j >= i) {
        let mid = Math.floor((i + j) / 2);
        if (arr[mid] == k) {
            left = mid;
            j = mid - 1;
        }
        else if (arr[mid] > k) {
            j = mid - 1;
        }
        else {
            i = mid + 1;
        }
        // console.log(left);
    }

    i = 0;
    j = arr.length - 1;

    while (j >= i) {
        let mid = Math.floor((i + j) / 2);
        if (arr[mid] == k) {
            right = mid;
            i = mid + 1;
        }
        else if (arr[mid] > k) {
            j = mid - 1;
        }
        else {
            i = mid + 1;
        }

    }
    console.log(right - left + 1);
}

countOccurance([1, 2, 2, 2, 3], 2);