function countThe(str){
    let newStr = str.split(" ");
    let count = 0;
    for(let i= 0 ; i<newStr.length;i++){
        if(newStr[i] == "the"){
            count++;
        }
    }
    console.log(count);
}

countThe("the hello world the the");


//m-2

// function count(str){
//     let count = 0

//     for(let i = 0; i < str.length; i++){
//         if(((str[i-1] == " " || i == 0) && str[i] == "t" && str[i+1] == "h" && str[i+2] == "e" && (str[i+3] == " " || i+3 == str.length))){
//             count++
//         }
//     }
//     console.log(count);
// }

// count("the the teh the")