function allPositive(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            console.log("All numbers are not positive");
            return;
        }

    }

    console.log("All numbers are positive");
}

allPositive([1,2,-4]);