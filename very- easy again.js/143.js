// Product of All Odd Integers
// Create a function that returns the product of all odd integers in an array.

// Examples
function oddProduct(arr) {
  let totalOfOdd = 1;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 !== 0) {
  //       totalOfOdd *= arr[i];
  //     }
  //   }
  //   return totalOfOdd;
  arr.forEach((item) => {
    if (item % 2 !== 0) {
      totalOfOdd *= item;
    }
  });
  return totalOfOdd;
}
console.log(oddProduct([3, 4, 1, 1, 5])); //➞ 15
console.log(oddProduct([5, 5, 8, 2, 4, 32])); //➞ 25
console.log(oddProduct([1, 2, 1, 2, 1, 2, 1, 2])); //➞ 1
// Notes
// N/A
