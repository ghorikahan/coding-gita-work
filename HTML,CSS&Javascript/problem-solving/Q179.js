function removeEmpty(arr){
    // let res =[];
    // for (let i = 0; i < arr.length; i++) {
    //     if(arr[i]!=""){
    //         res.push(arr[i]);
    //     }
    // }

    // let res = arr.filter((value)=>{
    //     if(value!=""){
    //         return value;
    //     }
    // })

    for (let i = 0; i < arr.length; i++) {
       if(arr[i]==""){
        arr.splice(i,1);
        i=i-1;
       }
    }
    console.log(arr);
}

removeEmpty(["a", "", "b", "", "c"]);