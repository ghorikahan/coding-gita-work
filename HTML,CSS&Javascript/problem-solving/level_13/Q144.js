let str = "k a h a n";
let newStr = str.split("");
var count = 0;
for(let i =0;i<newStr.length;i++){
    if(newStr[i]==" "){
        count++;
    }
}

console.log(count);