// let str = "hello";

// if(str.includes("a")){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// function present(string, char) {
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === char) {
//             console.log("character is presented in the string");
//             return;
//         }
//     }
//     console.log("character is not presented in the string");
// }

// present("Hello", "r");






function present(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            console.log("present"); 
            return;
        }

    }
    console.log("not present");
}


present("kahan","a");