function binary_search(arr,k) {
    let low = 0;
    let high = arr.length - 1;

    while (high >= low) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] > k) {
            high = mid - 1;
        }
        else if (arr[mid] < k) {
            low = mid + 1;
        }
        else {
            console.log(mid);
            return;
        }
    }
    console.log(-1);
}
binary_search([1, 3, 5, 7, 9], 5);