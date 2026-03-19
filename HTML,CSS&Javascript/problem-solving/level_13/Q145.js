function removeSpaces(str){
    // let res = str.trim();
    let i = 0;
    let j = str.length - 1;

    while(str[i] == " "){
        i++;
    }

    while(str[j] == " "){
        j--;
    }

    let res = "";
    for(let k = i; k <= j; k++){
        res = res + str[k];
    }

    console.log("*****" + res + "***");
}

removeSpaces("   Hello World   ");