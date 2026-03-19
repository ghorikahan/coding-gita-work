function removeDuplicate(str) {
    var res = "";
    for (let i = 0; i < str.length; i++) {
        if(str[i]!=str[i-1]){
            res +=str[i];
        }
    }
    console.log(res);
}

removeDuplicate("hellooo");