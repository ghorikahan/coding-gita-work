function countDigits(num) {
    var newNum = num.toString().split("");
    var count = 0;
    for (let i = 0; i < newNum.length; i++) {
        if(newNum[i]%2==0){
            count++;
        }
    }
    console.log(count);
}

countDigits(2830498243);