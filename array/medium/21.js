// Sum of Number Elements in an Array
// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

// Examples
function numbersSum(arr) {
  //   let count = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (typeof arr[i] === "number") {
  //       count += arr[i];
  //     }
  //   }
  //   return count;
  return arr.reduce((acc, cur) => {
    if (typeof cur === "number") {
      acc += cur;
    }
    return acc;
  }, 0);
}
console.log(numbersSum([1, 2, "13", "4", "645"])); //➞ 3

console.log(numbersSum([true, false, "123", "75"])); //➞ 0

console.log(numbersSum([1, 2, 3, 4, 5, true])); //➞ 15
// Notes
// Check the Resources tab for help.
