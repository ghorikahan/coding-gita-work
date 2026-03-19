function firstChar(arr){
    // let res = [];
    // for (const word of arr) {
    //     res.push(word[0]);
    // }
    // console.log(res);

    let res = arr.map((value,index)=>{
        let char = value;
        return char[0]
    })

    console.log(res);
}

firstChar(["apple", "banana", "cherry"]);