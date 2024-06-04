// Sum Greater Than Five
// Write a function that returns the sum of elements greater than 5, in the given array .

// Examples
function sumFive(arr) {
  //   let result = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > 5) {
  //       result += arr[i];
  //     }
  //   }
  //   return result;
  return arr.reduce((acc, cur) => {
    if (acc + cur > 5) {
      return acc + cur;
    } else {
      return 0;
    }
  });
}
console.log(sumFive([1, 5, 20, 30, 4, 9, 18])); //➞ 77
console.log(sumFive([1, 2, 3, 4])); //➞ 0
console.log(sumFive([10, 12, 28, 47, 55, 100])); //➞ 252
// Notes
// Find all the elements greater than 5, not the elements greater than or equal to 5.
