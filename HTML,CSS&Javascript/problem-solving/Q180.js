function addEvenNum(arr){
    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if(arr[i]%2==0){
    //         sum = sum + arr[i];
    //     }
    // }

    let newArr = arr.reduce((sum,num)=>{
        if(num%2==0){
            return sum+num;
        }
        else{
            return sum;
        }
    },0)
    
    console.log(newArr);
}

addEvenNum([1, 2, 3, 4, 5]);