const data = {
    students: [{ name: "Krishna", scores: [78, 82, 91] }, { name: "Dev", scores: [85, 88, 95] }],
    extra: [10, 5, 15, 20],
    active: true,
};


let score1 = 0;
let score2 = 0;

for (let i = 0; i < data.students[0].scores.length; i++) {
    score1 += data.students[0].scores[i];
}
for (let i = 0; i < data.students[1].scores.length; i++) {
    score2 += data.students[1].scores[i];
}


if (score1 > score2) {
    console.log("Average of this student is more : ", data.students[0].name)
}
else {
    console.log("Average of this student is more :", data.students[1].name);
}