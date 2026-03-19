function reverse(num) {
    let check = 1;
    var num;
    if (num < 0) {
        check = -1;
        num = Math.abs(num);
    }

    var num = (String(num).split("").reverse().join(""));
    console.log(num);
}

reverse(1224);