function double(str){
    let res = "";
    for(let i=0;i<str.length;i++){
        res= res+str[i]+str[i];
    }
    console.log(res);
}

double("hello");