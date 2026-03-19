function mergeTwoSortArr(arr1,arr2){
    let res= [];
    let i=0;
    let j = 0;

    while (i<arr.length && j<arr2.length) {
        if(arr1[i]<arr2[j]){
            res.push(arr1[i]);
            i++;
        }
        else{
            res.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        res.push(arr[i]);
        i++;
    }
    while(j<arr1.length){
        res.push(arr2[j])
    }
}