function nonRepeating(str) {
    for (let i = 0; i < str.length; i++) {
        let present = false;
        for (let j = 0; j < str.length; j++) {
            if (i == j) {
                continue;
            }
            if (str[i] == str[j]) {
                present = true;
                break;
            }
        }
        if (present == false) {
            console.log(str[i]);
            return;
        }
    }
    console.log("every element is repeating");
}

nonRepeating("aabbcc");