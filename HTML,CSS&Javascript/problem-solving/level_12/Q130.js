function coPrime(n1,n2){
    let range = Math.min(n1,n2);
    let GCD = 1;
    for (let i = range; i >=1; i--) {
        if(n1%i==0 && n2%i==0){
            GCD = i;
            break;
        }
    }
    console.log(GCD==1);
}

coPrime(12,18);