// funciton to check weather it is a prime number or not .
function checkPrime(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            count++;
        }
    }
    if (count == 2) return true;
    else return false;
}

// This function is to print 1 to N prime number .
function printPrime(n) {
    let res = [];
    for (let i = 0; i <= n; i++) {
        if (checkPrime(i)) {
            res.push(i);
        }
    }
    console.log(res.join(" "));
}

printPrime(20);