function nonRepeating(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (i == j) {
                continue;
            }
            if (str[i] == str[j]) {
                console.log(str[i]);
                return;
            }
        }
    }
    console.log("every element is unique");
}

nonRepeating("swiss");