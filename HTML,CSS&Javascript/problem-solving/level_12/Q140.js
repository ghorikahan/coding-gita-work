// function automorphicNumber(n) { // in this funcitoin edges cases are not handeled.
//     let num = n ** 2;
//     num = num.toString().split("");
//     return n == num[num.length - 1] ? true : false;
// }

// console.log(automorphicNumber(25));

function automorphic(n) {
    let length = n.toString().length;
    // console.log(length);
    square = n * n;
    if (square % 10 ** length == n) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

automorphic(25);