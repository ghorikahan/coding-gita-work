let n = 5;
let count = 0;
for (let i = 0; i <= n; i++) {
    let bag = "";
    for (let j = 1; j <= n; j++) {
        if (i >= j) {
            bag = bag + j;
        }
    }
    console.log(bag);
}