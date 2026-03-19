function valueCount(arr) {
    let pNum = 0;
    let nNum = 0;
    let zNum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            pNum++;
        }
        else if (arr[i] < 0) {
            nNum++;
        }
        else if (arr[i] == 0) {
            zNum++;
        }
    }

    console.log(pNum);
    console.log(nNum);
    console.log(zNum);
}

valueCount([1, 2, 3, 2, 0, -2, -1, 0, 2, -2, 3, -3]);