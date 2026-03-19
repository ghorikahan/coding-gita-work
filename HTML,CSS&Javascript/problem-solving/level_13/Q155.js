function letterOnly(str) {
    let newStr = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "a" && str[i] <= "z" || str[i] >= "A" && str[i] <= "Z") {
            continue;
        }
        else {
            console.log(false);
            return;
        }
    }
    console.log(true);
}