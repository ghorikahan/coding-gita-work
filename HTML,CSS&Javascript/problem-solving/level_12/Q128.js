function divisible(n) {
    var count = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0 && i % 5 == 0) {
            // console.log(i);
            count++;
        }
    }
    console.log(count);
}

divisible(20);