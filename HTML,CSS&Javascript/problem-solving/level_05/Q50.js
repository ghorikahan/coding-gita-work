var str = "HeLlO";
var res = "";
var res2 = "";
var res3 = "";

for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
        ascii = ascii + 32;
    }
    else if (ascii >= 97 && ascii <= 122) {
        ascii = ascii - 32;
    }
    res = res + String.fromCharCode(ascii);
}

console.log(res);




for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
        res2 = res2 + str[i].toLowerCase();
    }
    else {
        res2 = res2 + str[i].toUpperCase();
    }
}

console.log(res2);



for (let i = 0; i < str.length; i++) {
    if(str[i].toLowerCase()==str[i]){
        res3 = res3+str[i].toUpperCase();
    } 
    else{
        res3 = res3+str[i].toLowerCase();
    }
}


console.log(res3);