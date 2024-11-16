// class Solution {
//   select(arr, i) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     return minIndex;
//   }

//   selectionSort(arr, n) {
//     for (let i = 0; i < n - 1; i++) {
//       let minIndex = this.select(arr, i);
//       if (minIndex !== i) {
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//       }
//     }
//   }
// }

let arr = [4, 1, 3, 9, 7];
let n = arr.length;
function solution(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  return arr;
}
console.log(solution(arr, n));
// // Create an instance of the Solution class
// let solution = new Solution();

// // Sort the array
// solution.selectionSort(arr, n);
// console.log(arr); //[1,3,4,7,9]
