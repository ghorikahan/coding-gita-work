function swapIndex(arr,i,j){
    // let swap;
    // swap = arr[i];
    // arr[i] = arr[j];
    // arr[j] = swap;

    // console.log(arr);

    [arr[i],arr[j]] = [arr[j],arr[i]];
    console.log(arr);
}

swapIndex([1, 2, 3, 4],1,3);