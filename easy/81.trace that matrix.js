// Trace That Matrix
// Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right).

// As an example, for:

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// ... the trace is 1 + 5 + 9 = 15.

// Write a function that takes a square matrix and computes its trace.

// Examples
function trace(arr) {
  // let total = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   total += arr[i][i];
  // }
  // return total;
  let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr[i].length; j++) {
  //     if (arr[i] === arr[j]) {
  //       sum += arr[i][j];
  //     }
  //   }
  // }
  let indexCount = 0;
  while (indexCount < arr.length) {
    sum += arr[indexCount][indexCount];
    indexCount++;
  }
  return sum;
}
console.log(
  trace([
    [1, 4],
    [4, 1],
  ])
); //➞ 2

// 1 + 1 = 2

console.log(
  trace([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); //➞ 15

// 1 + 5 + 9 = 15

console.log(
  trace([
    [1, 0, 1, 0],
    [0, 2, 0, 2],
    [3, 0, 3, 0],
    [0, 4, 0, 4],
  ])
); //➞ 10

// 1 + 2 + 3 + 4 = 10
// Notes
// As in the examples, the size of the matrices will vary (but they will always be square).
