function negativeNum(arr){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<0){
            console.log(arr[i]);
        }
    }
}

negativeNum([-1, 0, 5, 3, -2]);