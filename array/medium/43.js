// Odd Up, Even Down — N Times
// Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:

// Adds two (+2) to each odd integer.
// Subtracts two (-2) from each even integer.
// Examples
function evenOddTransform(arr, n) {
  for (let i = 0; i < n; i++) {
    // arr = arr.map((num) => (num % 2 === 0 ? num - 2 : num + 2));
    arr = arr.reduce((acc, cur) => {
      acc.push(cur % 2 === 0 ? cur - 2 : cur + 2);
      return acc;
    }, []);
  }
  return arr;
}
console.log(evenOddTransform([3, 4, 9], 3)); //➞ [9, -2, 15]
// Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]

console.log(evenOddTransform([0, 0, 0], 10)); //➞ [-20, -20, -20]

console.log(evenOddTransform([1, 2, 3], 1)); //➞ [3, 0, 5]
// Notes
// N/A
