// Check if One Array can be Nested in Another
// Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
// Examples
function canNest(arr1, arr2) {
  // const minArr1 = Math.min(...arr1);
  // const minArr2 = Math.min(...arr2);
  // const maxArr1 = Math.max(...arr1);
  // const maxArr2 = Math.max(...arr2);
  // return minArr1 > minArr2 && maxArr1 < maxArr2;
  // arr1.sort((a, b) => a - b);
  // arr2.sort((a, b) => a - b);
  const concat = arr1.concat(arr2).sort();
  // return concat;
  // let result = [];
  // for (let i = 0; i < concat.length; i++) {
  //   if (result.indexOf(concat[i]) !== -1) {
  //     return true;
  //   }
  // }
  // return false;
  // return arr1[0] > arr2[0] && arr1[arr1.length - 1] < arr2[arr2.length - 1];
  // return concat;
  return (
    concat[0] < concat[1] &&
    concat[concat.length - arr2.length] < concat[concat.length - 1]
  );
}
console.log(canNest([1, 2, 3, 4], [0, 6])); //➞ true
console.log(canNest([3, 1], [4, 0])); //➞ true
console.log(canNest([9, 9, 8], [8, 9])); //➞ false
console.log(canNest([1, 2, 3, 4], [2, 3])); //➞ false
// Notes
// Note the strict inequality (see example #3).
