function maxDiff(arr){
    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>max){
            max = arr[i];
        }    
        if(arr[i]<min){
            min = arr[i]
        }
    }
    console.log(max-min);
}

maxDiff([1,4,2,3,6,5,8,9,7,5,]);