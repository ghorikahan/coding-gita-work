function removeSpecial(str){
    let res = "";

    for(let i = 0; i < str.length; i++){
        if((str[i] >= "A" && str[i] <= "Z") ||(str[i] >= "a" && str[i] <= "z") ||(str[i] >= 0 && str[i] <= 9)){
            res = res + str[i];
        }
    }
    console.log(res);
}

removeSpecial("AFJFKD%*&75463");
