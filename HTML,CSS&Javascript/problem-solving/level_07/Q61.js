function doubleEl(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    console.log(newArr);
}

doubleEl([1, 2, 3]);