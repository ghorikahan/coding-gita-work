function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i ; j++) {
            if (arr[j] > arr[j+1]) {
                // let temp = arr[j];
                // arr[j] = arr[j+1];
                // arr[j+1] = temp;

                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    console.log(arr);
}

bubbleSort([1,5,4,3,2]);






function selectionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
            
        }
    }
}