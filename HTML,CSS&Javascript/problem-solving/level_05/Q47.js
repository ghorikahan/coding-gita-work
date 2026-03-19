var str = "HeLlO";

let count = 0;

for (let i = 0; i <= str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
        // console.log(str[i]);
        count++;
    }
}

let count2 = 0;


for (let i = 0; i <= str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
        // console.log(str[i]);
        count2++;
    }
}

let count3 = 0;
for (let i = 0; i < str.length; i++) {
    let check = str[i].toLowerCase;

    if (check == str[i]) {
        count3++;
    }
}


console.log(count);
console.log(count2);
console.log(count3);