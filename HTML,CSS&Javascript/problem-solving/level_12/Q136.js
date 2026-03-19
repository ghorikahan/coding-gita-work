function threeDigit(num) {
    var newNum = num.toString().split("");
    var count = 0;
    for (let i = 0; i < newNum.length; i++) {
        if (newNum[i] != 0) {
            count++;
        }
    }
    return count == 3 ? true : false;
}

console.log(threeDigit(213));