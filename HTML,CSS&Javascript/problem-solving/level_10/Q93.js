let arr = [{ name: "A", marks: 50 },
{ name: "B", marks: 80 },
{ name: "C", marks: 70 }
];
let name = "";

let maxMarks = 0;
for(let obj of arr){
    if(obj["marks"]>maxMarks){
        name = obj["name"];
        maxMarks = obj["marks"];
    }
}

console.log(name);