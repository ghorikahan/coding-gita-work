function squareSum(n) {
    var sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i ** 3;
    }
    console.log(sum);
}

squareSum(3);