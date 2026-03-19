function long(str1,str2) {
    // return str1.length > str2.length ? str1 : str2;
    let n1 = str1.length;
    let n2 = str2.length;

    if(n1>n2){
        return str1;
    }
    else if(n1<n2){
        return str2;
    }
    else{
        return `${str1},${str2}`;
    }
}

console.log(long("kahan","kaha"));