function vovelCheck(str) {
    for (let i = 0; i < str.length; i++) {
        let checkStr = "aeiou";
        if (checkStr.includes(str[i])) {
            console.log(true);
            return;
        }
    }
}

vovelCheck("kahan");