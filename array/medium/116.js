// Determine If Two Numbers Add up to a Target Value
// Given two unique integer arrays a and b, and an integer target value v, create a function to determine whether there is a pair of numbers that add up to the target value v, where one number comes from one array a and the other comes from the second array b.

// Return true if there is a pair that adds up to the target value and false otherwise.

// Examples
function sumOfTwo(arr1, arr2, target) {
  let [first, second] = arr1;
  for (let i = 0; i < arr2.length; i++) {
    let num = arr2[i];
    if (first + num === target) {
      return true;
    } else if (second + num === target) {
      return true;
    }
  }
  return false;
  //   let total1 = arr2.reduce((acc, cur) => {
  //     acc += cur;
  //     return acc;
  //   }, 0);
  //   return total1
}
console.log(sumOfTwo([1, 2], [4, 5, 6], 5)); //➞ true
console.log(sumOfTwo([1, 2], [4, 5, 6], 8)); //➞ true
console.log(sumOfTwo([1, 2], [4, 5, 6], 3)); //➞ false
console.log(sumOfTwo([1, 2], [4, 5, 6], 9)); //➞ false
console.log(sumOfTwo([1, 3], [4, 5, 6], 9)); //➞ false

// Notes
// N/A
