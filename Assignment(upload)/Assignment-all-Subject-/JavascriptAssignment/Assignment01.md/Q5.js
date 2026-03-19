let a = 123;
let b = 123;
let c = 123;


if (a > b && a > c) {
    console.log("A is the largest number");
}
else if (b > c && b > a) {
    console.log("B is the largest number");
}
else if (c > a && c > b) {
    console.log("C is the largest number");
}

else {
    console.log("all are equal");
}