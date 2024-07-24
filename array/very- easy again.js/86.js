// Outlier Number
// Given an array of either entirely odd integers or entirely even integers except for a single Outlier Number, create a function to return this number.

// Examples
function outlierNumber(arr) {
  //   const firstThree = arr.slice(0, 3);
  //   const evens = firstThree.filter((num) => num % 2 === 0).length;
  //   const majorityEven = evens >= 2;

  //   // Iterate through the array to find the outlier
  //   for (let num of arr) {
  //     if ((num % 2 === 0) !== majorityEven) {
  //       return num;
  //     }
  //   }
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < 3; i++) {
    if (arr[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  let majorityEven = evenCount > oddCount;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2 === 0) !== majorityEven) {
      return arr[i];
    }
  }
}
console.log(outlierNumber([2, 3, 4])); //➞ 3
// 2 and 4 are even numbers.
// 3 is an outlier number.
console.log(outlierNumber([1, 2, 3])); //➞ 2
console.log(outlierNumber([4, 1, 3, 5, 9])); //➞ 4
// Notes
// Array size will always be >= 3.
