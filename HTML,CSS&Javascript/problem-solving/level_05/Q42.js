// function replaceA(string){
// let res = string.replace("a","e");
// console.log(res);
// }
// replaceA("banana");


// let res = "";
// for(let i = 0;i<string.length;i++){
//     if(string[i] == "a"){
//         res = res + "e";
//     }
//     else{
//         res = res + string[i];
//     }
// }
// console.log(res);







let str = "kahan";

let res = "";
for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a') {
        res = res + 'e';
    } else {
        res = res + str[i];
    }
}

console.log(res);

