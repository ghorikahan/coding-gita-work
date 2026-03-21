

// 9. From the extra array in the object, sort the numbers in descending order, print the largest number and the smallest number after sorting

Code: const data = {
    students: [{ name: "Krishna", scores: [78, 82, 91] }, { name: "Dev", scores: [85, 88, 95] }],
    extra: [5, 10, 15, 20],
    active: true,
};

data.extra.sort((a, b) => b - a)
console.log("Sorted Array in decreasing order : ", data.extra);

let maxNo = data.extra[0];
let minNo = data.extra[0];

for (let i = 0; i < data.extra.length; i++) {
    if (data.extra[i] > maxNo) {
        maxNo = data.extra[i];
    }
    if (data.extra[i] < minNo) {
        minNo = data.extra[i];
    }
}
console.log("Maximum Number is : ", maxNo)
console.log("Minimum Number is : ", minNo)


// METHOD - 2 USING MANUAL FUNCTION NOT IN - BUILD METHOD


// const data = {
//     students: [{ name: "Krishna", scores: [78, 82, 91] }, { name: "Dev", scores: [85, 88, 95] }],
//     extra: [5, 10, 15, 20],
//     active: true,
// };

// for (let i = 0; i < data.extra.length; i++) {
//     for (let j = i; j < data.extra.length; j++) {
//         if (data.extra[j] > data.extra[i]) {
//             [data.extra[i], data.extra[j]] = [data.extra[j], data.extra[i]]
//         }
//     }
// }
// console.log("Sorted array in decreasing order is : ", data.extra);


// let maxNo = data.extra[0];
// let minNo = data.extra[0];

// for (let i = 0; i < data.extra.length; i++) {
//     if (data.extra[i] > maxNo) {
//         maxNo = data.extra[i];
//     }
//     if (data.extra[i] < minNo) {
//         minNo = data.extra[i];
//     }
// }
// console.log("Maximum Number is : ", maxNo)
// console.log("Minimum Number is : ", minNo)