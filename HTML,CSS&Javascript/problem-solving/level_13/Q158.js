function wordCount(str) {
    let count = 0;
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            count++;
        }
        else {
            if (count >= 5) {
                res++;
            }
            count++;
        }
    }
    if (count >= 5) {
        res++;
    }
    console.log(res);
}

wordCount("this is the post lunch lecture of problem solving");