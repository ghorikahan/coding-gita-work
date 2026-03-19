let a = 85;
let b = 89;
let c = 80;
let d = 82;
let e = 75;

let result = ((a + b + c + d + e / 500) * 100);

if (result >= 90) {
    console.log("Grade A");
}

else if (result >= 80 && result <= 89) {
    console.log("Grade B");
}

else if (result >= 70 && result <= 79) {
    console.log("Grade C");
}

else if (result >= 60 && result <= 69) {
    console.log("Grade C");
}

else {
    console.log("Fail");
}