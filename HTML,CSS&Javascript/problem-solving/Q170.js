function duplicate(arr) {
    // let sortedArr = arr.sort((a,b)=>a-b);
    // for (let i = 0; i < arr.length; i++) {
    //     if(arr[i]==arr[i+1]){
    //         console.log(true);
    //         return;
    //     }
    // }
    // console.log(false);
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }

    for (let char in obj) {
        if (obj[char] > 1) {
            console.log(true);
            return;
        }
    }
    console.log(false);

}

duplicate([1, 4, 2, 3, 1]);