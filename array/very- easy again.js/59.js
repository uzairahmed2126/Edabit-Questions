// Get the Sum of All Array Elements
// Create a function that takes an array and returns the sum of all numbers in the array.

// Examples
function getSumOfItems(arr) {
  let result = 0;
  //   for (const iterator of arr) {
  //     result += iterator;
  //   }
  //   for (let index = 0; index < arr.length; index++) {
  //     result += arr[index];
  //   }
  //   arr.forEach((element) => {
  //     result += element;
  //   });
  //   return result;
  return arr.reduce((acc, cur) => acc + cur, 0);
}
console.log(getSumOfItems([2, 7, 4])); //➞ 13
console.log(getSumOfItems([45, 3, 0])); //➞ 48
console.log(getSumOfItems([-2, 84, 23])); //➞ 105
// Notes
// N/A
