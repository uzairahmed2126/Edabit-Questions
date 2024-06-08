// Sum of Minimums
// Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.

// Examples
function sumMinimums(arr) {
  let sumOfMinimums = 0;
  for (let i = 0; i < arr.length; i++) {
    let minimumNumber = Math.min(...arr[i]);
    // sumOfMinimums += arr[i][0];
    sumOfMinimums += minimumNumber;
  }
  return sumOfMinimums;
}
console.log(
  sumMinimums([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100],
  ])
); //➞ 26

// minimum value of the first row is 1
// minimum value of the second row is 5
// minimum value of the third row is 20
// Notes
// N/A
