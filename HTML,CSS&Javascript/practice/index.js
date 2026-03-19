// function fibo(n) {
//     let res = [];
//     for (let i = 1; i <= n; i++) {
//         if (i == 1) {
//             res.push(0);
//             continue;
//         }
//         if (i == 2) {
//             res.push(1);
//             continue;
//         }

//         let check = res[i - 2] + res[i - 3];
//         res.push(check);
//     }



function countVowel(str){
    var obj = {
        'a': 1,
        'e': 1,
        'i': 1,
        'o': 1,
        'u': 1
    }

    let newStr = str.split("");
    let count = 0;
    for (let i = 0; i < newStr.length; i++) {
        if(obj[newStr[i]] == 1){
            count++;
        }
    }
    console.log(count);
}

countVowel("kahan ghori");