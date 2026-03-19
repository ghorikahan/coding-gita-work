n = String(125);
let i = 0;
let j = n.length - 1;

while(i<=j){
    if(n[i] == n[j]){
        i++;
        j--;
    }
    else{
        console.log("Not a pallidrome number");
        return;
    }
}
console.log("pallidrome");