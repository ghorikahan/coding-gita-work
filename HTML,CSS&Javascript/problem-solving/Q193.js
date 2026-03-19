function pairSum(arr, k) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == k) {
                console.log("true");
                return;
            }
        }
    }
    console.log("flase");
}

pairSum([1, 2, 3, 4, 5], 5);