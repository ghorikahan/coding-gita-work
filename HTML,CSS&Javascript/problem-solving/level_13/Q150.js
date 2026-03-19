function shortestWord(str) {
    let count = "";
    res = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            if (count.length > 0) {
                res.push(count);
                count = "";
            }
        }
        else {
            count = count + str[i]
        }
    }

    let min = Infinity;
    let word = "";
    for (let i = 0; i < res.length; i++) {
        if (res[i].length < min) {
            word = res[i];
            min = res[i].length
        }
    }
    console.log(word)
}

shortestWord("HELLO This is the problem solving class with javascript")