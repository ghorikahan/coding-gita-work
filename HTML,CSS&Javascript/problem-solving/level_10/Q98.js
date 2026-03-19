let marks ={marks: 80,science: 90,english: 70};
let res = [];

for(let mark in marks){
    res.push(marks[mark]);
}

console.log(res);