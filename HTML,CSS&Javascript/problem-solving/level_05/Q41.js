// let arr = "   hello            everyone    ";
// var b = arr.split(" ");
// var count = 0;
// for (let i = 0; i < b.length; i++) {
//     if (b[i] !== "") {
//         count++;
//     }
// }
// console.log(count);

// function countWords(b) {
//     let count = 1;
//     for (let i = 0; i < b.length; i++) {
//         if(i==0 && b[i]!=" "){
//             count++;
//         }
//         if (b[i] !== " " &&b[i - 1]==" ") {
//             count++;
//         }
//     }
//     console.log(count);
// }

// countWords("    i                  am kahan                         ghori                                       n");



function countWords(str){
    var newStr = str.split(" ");
    var count = 0;
    for (let i = 0; i < newStr.length; i++) {
        if(newStr[i] != " "){
            count++;
        }
    }
    console.log(count);
    // console.log(newStr);
}

countWords("Hello world");
