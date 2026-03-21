let obj = {
    name: "Riya",
    marks: [89, 76, 92]
}
var total = 0;

console.log(obj.name);

for (let i = 0; i < obj.marks.length; i++) {
    console.log(obj.marks[i]);
    total = total + obj.marks[i];
}

console.log(total);