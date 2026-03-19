function firstWord(str){
    let newStr = str.trim().split(" ");
    // console.log(newStr[0]); //m-1
    for(let i= 0 ;i<newStr.length;i++){// m-2
        if(newStr[i] == ""){
            console.log(newStr[i-1]);
        }
    }
}

firstWord(" hello   world");

//m -3

// function firstWord(str){
//     // console.log(res[0])
//     let res = "";
//     let check = false;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] != " "){
//             check = true;
//             res = res + str[i];
//         }
//         else if(check == true && str[i] == " "){
//             break;
//         }
//     }
//     console.log(res)
// }

// firstWord(" Hello World")
