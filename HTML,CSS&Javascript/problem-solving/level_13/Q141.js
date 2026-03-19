function middleChar(str) {
    let length = str.length;
    let middle = Math.floor(length / 2);    
    let res = "";

    if (length % 2 == 0) {
        res = res + str[middle - 1] + str[middle];
    } else {
        res = res + str[middle];
    }
    console.log(res);
}

middleChar("abc");
middleChar("tree");