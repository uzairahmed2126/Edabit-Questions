// Even Number Generator
// Create a function that finds all even numbers from 1 to the given number.

// Examples
function findEvenNums(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  return result;
}
console.log(findEvenNums(8)); //➞ [2, 4, 6, 8]

console.log(findEvenNums(4)); //➞ [2, 4]

console.log(findEvenNums(2)); //➞ [2]
// Notes
// If there are no even numbers, return an empty array.
