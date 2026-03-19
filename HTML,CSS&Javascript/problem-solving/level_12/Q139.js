function harshad(n) {
    var sum = 0;
    var newNum = n.toString().split("");
    for (let i = 0; i < newNum.length; i++) {
        sum = sum + Number(newNum[i]);
    }
    return n % sum == 0 ? true : false;
}

console.log(harshad(21));