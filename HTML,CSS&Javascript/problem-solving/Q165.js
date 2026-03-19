function atLeast1Even(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log("one even number present");
            return;
        }
    }
    console.log("no even number");
}

atLeast1Even([1, 3, 5, 6]);