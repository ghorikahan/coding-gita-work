// let arr = [1, 1, 1, 1, 1, 2, 3, 78, 99];
// for (let i = 0; i < arr.length; i++) {
//     if (i == 0) {
//         continue;
//     }
//     else if (arr[i] >= arr[i - 1]) {
//         continue;
//     }
//     else {
//         console.log("unsorted");
//         return;
//     }
// }
// console.log("array is sorted");

function unSort(arr){
    for (let i = 0; i < arr.length; i++) {
        if(i==0){
            continue;
        }
        else if(arr[i]>=arr[i-1]){
            continue;
        }
        else{
            console.log("unsorted array");
            return;
        }
    }
    console.log("array is sorted");
}
unSort([1,2,4,3,5])