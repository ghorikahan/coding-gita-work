function perfectNum(num) {
    var sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            sum = sum + i;
        }
    }
    return sum == num ? true : false;
}

console.log(perfectNum(6));