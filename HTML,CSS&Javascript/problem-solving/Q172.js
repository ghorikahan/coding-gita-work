function incSort(arr){
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i]>=arr[i+1]){
            console.log(false);
            return;
        }
    }
    console.log(true);
}

incSort([1,2,3,6,5]);