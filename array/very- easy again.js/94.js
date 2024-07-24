// Even and Last
// Given an array of integers arr, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// If the sequence is empty, you should return 0.

// Examples
function evenLast(arr, lastIndex = arr[arr.length - 1]) {
  let count = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (i % 2 === 0) {
  //       count += arr[i] * lastIndex;
  //     }
  //   }
  arr.forEach((element, index) => {
    if (index % 2 === 0) {
      count += element * lastIndex;
    }
  });
  return count;
}
console.log(evenLast([2, 3, 4, 5])); //➞ 30
// numbers at even index = 2, 4
// number at last index = 5
// 2*5 + 4*5 = 10 + 20 = 30
console.log(evenLast([1, 3, 3, 1, 10])); //➞ 140
console.log(evenLast([])); //➞ 0
// Notes
// N/A
