
function fibo(n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        if (i == 1) {
            res.push(0);
            continue;
        }
        if (i == 2) {
            res.push(1);
            continue;
        }
        let check = res[i - 2] + res[i - 3];

        res.push(check);
    }
    console.log(res.join(" "));
}

fibo(5);