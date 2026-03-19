function Pangram(str) {
    let arr = str.toLowerCase().split("").sort();
    let ascii = 97;
    for (let i = 0; i < arr.length; i++) {
        let check = arr[i].charCodeAt();
        if (ascii == check) {
            ascii++;
        }
    }

    console.log(ascii >= 123 ? true : false);
}

Pangram("The quick brown fox jumps over a lazy dog");

//  m-2 

let checkStr = "qwertyuiopasdfghjklzxcvbnm";
str = checkStr.toLowerCase();

for (let i = 0; i < checkStr.length; i++) {
    if (!(str.includes(checkStr[i]))) {
        console.log(false);
        return;
    }
}

console.log(true);