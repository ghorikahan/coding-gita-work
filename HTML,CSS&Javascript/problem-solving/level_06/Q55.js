function countEven(arr){
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2==0){
            count++;
        }
    }

    console.log(count);
}
countEven([1,2,3,4,5,6]);