function strLength(str){
    let count = 0;
    for(let char of str){
        if(char.length>3){
            count++;
        }
    }
    console.log(count);
}

strLength(["hi", "hello", "hey", "Java"]);