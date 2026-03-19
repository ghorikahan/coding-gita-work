let str = "kahan";

// console.log(str.toUpperCase());

let res = "";

for(let i = 0;i<str.length;i++){
    let value = str.charCodeAt(i);
    if(value>=97 && value<=122){
        res = res+String.fromCharCode(value-32);
    }
    else{
        res = res+str[i];
    }
}
console.log(res);





