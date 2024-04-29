// How Much is True?
// Create a function which returns the number of true values there are in an array.

// Examples
function countTrue(values) {
  let countTrue = 0;
  //   for (let i = 0; i < values.length; i++) {
  //     if (typeof values[i] === "boolean" && values[i] === true) {
  //       countTrue += values[i];
  //     }
  //   }
  //   return countTrue;

  values.some((item) => {
    if (item === true) {
      countTrue += item;
    }
  });
  return countTrue;
}
console.log(countTrue([true, false, false, true, false])); //➞ 2
console.log(countTrue([false, false, false, false])); //➞ 0
console.log(countTrue([])); //➞ 0
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).
