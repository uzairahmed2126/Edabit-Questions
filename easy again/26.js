// Count Ones in a 2D Array
// Create a function to count the number of 1s in a 2D array.

// Examples
function countOnes(arr) {
  let flated = arr.flat();
  //   let count = 0;
  //   for (let i = 0; i < flated.length; i++) {
  //     if (flated[i] === 1) {
  //       count += flated[i];
  //     }
  //   }
  //   return count;
  //   return flated.reduce((acc, cur) => {
  //     if (cur === 1) {
  //       return acc + cur;
  //     }
  //     return acc;
  //   }, 0);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 1) {
        count++;
      }
    }
  }
  return count;
}
console.log(
  countOnes([
    [1, 0],
    [0, 0],
  ])
); //➞ 1

console.log(
  countOnes([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ])
); //➞ 7

console.log(
  countOnes([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33],
  ])
); //➞ 2
// Notes
// N/A
