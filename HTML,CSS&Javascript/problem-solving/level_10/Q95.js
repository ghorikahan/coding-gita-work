let marks = {math:80,science:90,english:70};
let total = 0;
let count = 0;

for(let mark in marks){
    total+=marks[mark];
    count++;
}
console.log(total/count);