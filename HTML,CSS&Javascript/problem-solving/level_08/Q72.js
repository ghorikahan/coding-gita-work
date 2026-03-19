var dup = [1, 2, 2, 5, 6];

let res = [];

for (let i = 0; i < dup.length; i++) {
    let notPresent = true;
    for (let j = 0; j < res.length; j++) {
        if (arr[i] == res[j]) {
            notPresent = false;
            break;
        }
    }
    if (notPresent == true) {
        res.push(arr[i]);
    }
}

console.log(res);

// m-2.

let res1 = new set(arr);
console.log(res1);
console.log([...res1]);

// m-3.                              

let resObj = {};
let res3 = [];
for (let i = 0; i < arr.length; i++) {
    if(obj[arr[i]]){
        obj[arr[i]]++;
    }
    else{
        obj[arr[i]]=1;
    }
}
for(let char in resObj){
    res.push(Number(char));
}

console.log(res);