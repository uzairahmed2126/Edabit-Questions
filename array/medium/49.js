// Sum of Found Indexes
// Create a function which takes in an array of numbers and a number to find. Return the sum of every index in the array which matches the chosen number.

// Examples
function sumFoundIndexes(arr, n) {
  //   let count = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === n) {
  //       count += i;
  //     }
  //   }
  //   return count;
  return arr.reduce((acc, cur, index) => {
    if (cur === n) acc += index;
    return acc;
  }, 0);
}
console.log(sumFoundIndexes([0, 3, 3, 0, 0, 3], 3)); //➞ 8
// The number 3 was found at indexes 1, 2 and 5.
// 8 = 1 + 2 + 5

console.log(sumFoundIndexes([1, 2, 3, 4, 5, 6], 3)); //➞ 2

console.log(sumFoundIndexes([100, 100, 100, 100, 100], 100)); //➞ 10

console.log(sumFoundIndexes([5, 10, 15, 20], 2)); //➞ 0
// Notes
// 0 can be the result if no number in the array matches or if the only matching element is at index 0.
