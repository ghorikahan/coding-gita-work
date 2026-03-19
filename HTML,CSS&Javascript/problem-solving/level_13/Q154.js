function vovelCheck(str) {
    for (let i = 0; i < str.length; i++) {
        let checkStr = "0123456789";
        if (!(checkStr.includes(str[i]))) {
            console.log(false);
            return;
        }
    }
    console.log(true);
}

vovelCheck("121212");