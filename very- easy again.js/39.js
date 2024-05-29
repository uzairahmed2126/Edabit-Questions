// Buggy Code (Part 3)
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// Examples
function sumArray(arr) {
  let result = 0;
  //   arr.forEach((element) => (result += element));
  //   return result;
  //   return arr.reduce((acc, curr) => acc + curr, 0);
  //   for (let i = 0; i < arr.length; i++) {
  //     result += arr[i];
  //   }
  //   return result;

  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
  //   return result;
}
console.log(sumArray([1, 2, 3, 4, 5])); // ➞ 15
console.log(sumArray([-1, 0, 1])); // ➞ 0
console.log(sumArray([0, 4, 8, 12])); // ➞ 24
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
// Don't overthink this challenge; it's not supposed to be hard.
